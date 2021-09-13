import { HttpResponse } from './types';
import { respondJson } from './responsHelper';
import products from './productList.json';
import { getProductsFromDB } from './dbHelper';

export async function handler(): HttpResponse {
  const result = await getProductsFromDB();
  return respondJson(result, 200);
}
