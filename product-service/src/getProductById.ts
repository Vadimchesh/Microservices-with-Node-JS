import { HttpEventRequest, HttpResponse, HttpResponseBody } from './types';
import products from './productList.json';
import { respondJson } from './responsHelper';

export async function handler(
  event: HttpEventRequest<{ id: string }>
): HttpResponse {
  const { id: idParametr } = event.pathParameters;

  if (!idParametr) return respondJson({ message: 'No product' }, 400);

  const product = (products as HttpResponseBody[]).find(
    ({ id }) => id === idParametr
  );

  if (!product) return respondJson({ message: 'No product' }, 400);

  return respondJson({ ...product }, 200);
}
