import { ClientConfig } from 'pg';

const { PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PASS } = process.env;

export const dbConfig: ClientConfig = {
  host: 'products.clbzxnessjuh.eu-west-1.rds.amazonaws.com',
  port: 5432,
  database: 'products',
  user: 'postgres',
  password: 'ShvFNAexlCFcopXtsR8x',
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};
