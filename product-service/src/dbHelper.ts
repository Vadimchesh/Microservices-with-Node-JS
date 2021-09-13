import { Client } from 'pg';
import { dbConfig } from './dbConnection';

export const DBConnection = async () => {
  try {
    const client = new Client(dbConfig);
    await client.connect();

    return client;
  } catch (e) {
    throw new Error('DB Connection lost');
  }
};

export const getProductsFromDB = async () => {
  const client = await DBConnection();
  try {
    const { rows: products } = await client.query(
      'SELECT products.*, stocks.count FROM products JOIN stocks ON id = product_id'
    );

    return products;
  } catch (e) {
    throw new Error('e');
  } finally {
    client.end();
  }
};

export const getProductByIdFromDB = async (id: string) => {
  const client = await DBConnection();
  try {
    const { rows: products } = await client.query(
      'SELECT products.*, stocks.count FROM products JOIN stocks ON id = product_id WHERE id=$1',
      [id]
    );

    return products[0];
  } catch (e) {
    throw new Error('e');
  } finally {
    client.end();
  }
};

export const addProductInDB = async (product: any) => {
  const client = await DBConnection();
  try {
    await client.query('BEGIN');

    const { rows: newProduct } = await client.query(
      'INSERT INTO products(title, description, price, image) values ($1, $2, $3, $4, $5) RETURNING id',
      [product.title, product.description, product.price, product.image]
    );
    const { rows: result } = await client.query(
      'INSERT INTO stocks(product_id, count) values ($1, $2) RETURNING product_id',
      [newProduct[0].id, product.count]
    );
    await client.query('COMMIT');

    return result[0].product_id;
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.end();
  }
};
