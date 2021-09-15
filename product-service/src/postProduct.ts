import { Body, HttpResponse } from './types';
import { respondJson } from './responsHelper';
import { addProductInDB } from './repository';
import { APIGatewayProxyEvent } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent): HttpResponse {
  const body = event.body;
  if (!body) return respondJson({ message: 'No body' }, 400);

  const data: Body = JSON.parse(body);

  if (!(Object.values(data).length === 5))
    return respondJson({ message: 'Incorect data' }, 400);

  const product = await addProductInDB(data);
  console.log(product);

  if (!(product.length === 36))
    return respondJson({ message: 'External error' }, 500);

  return respondJson({ product }, 200);
}
