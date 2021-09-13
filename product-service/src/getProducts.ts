import { HttpResponse } from './types';
import { respondJson } from './responsHelper';
import { getProductsFromDB } from './dbHelper';

export async function handler(): HttpResponse {
  const result = await getProductsFromDB();
  return respondJson(result, 200);
}
