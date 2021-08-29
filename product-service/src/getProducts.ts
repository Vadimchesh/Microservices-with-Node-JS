import { HttpResponse } from './types';
import { respondJson } from './responsHelper';
import products from './productList.json';

export async function handler(): HttpResponse {
  return respondJson(products, 200);
}
