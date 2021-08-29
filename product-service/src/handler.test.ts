import { handler as getProductById } from './getProductById';
import { handler as getProducts } from './getProducts';
import products from './productList.json';
import { respondJson } from './responsHelper';

const defaultEvent = {
  pathParameters: { id: products[0].id },
} as any;

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getProduct handler', () => {
  it('should respond current product by id', async () => {
    const actual = await getProductById(defaultEvent);
    const expected = respondJson(
      {
        ...products[0],
      },
      200
    );

    expect(actual).toEqual(expected);
  });

  it('should respond all products', async () => {
    const actual = await getProducts();
    const expected = respondJson(
      {
        products,
      },
      200
    );

    expect(actual).toEqual(expected);
  });
});
