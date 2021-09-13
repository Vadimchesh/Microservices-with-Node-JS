import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export type HttpEventRequest<T = null> = Omit<
  APIGatewayProxyEvent,
  'pathParameters'
> & {
  pathParameters: T;
};

export type HttpResponse = Promise<APIGatewayProxyResult>;

export type HttpResponseBody = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  count: number;
};

export type Body = Omit<HttpResponseBody, 'id'>;
