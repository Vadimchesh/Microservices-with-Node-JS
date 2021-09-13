import { HttpEventRequest, HttpResponse, HttpResponseBody } from './types';
import { respondJson } from './responsHelper';
import { getProductByIdFromDB } from './repository';

export async function handler(
  event: HttpEventRequest<{ id: string }>
): HttpResponse {
  const { id: idParametr } = event.pathParameters;

  if (!idParametr) return respondJson({ message: 'No product' }, 400);

  const product = getProductByIdFromDB(idParametr);

  if (!product) return respondJson({ message: 'No product' }, 400);

  return respondJson({ ...product }, 200);
}
