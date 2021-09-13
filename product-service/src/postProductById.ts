import { HttpResponse } from './types';
import { respondJson } from './responsHelper';
import { getProductByIdFromDB } from './dbHelper';

export async function handler(event: any): HttpResponse {
  const { data } = event.body;

  if (!data) return respondJson({ message: 'No data' }, 400);

  const product = await getProductByIdFromDB(idParametr);

  if (!product) return respondJson({ message: 'No product' }, 400);

  return respondJson({ ...product }, 200);
}
