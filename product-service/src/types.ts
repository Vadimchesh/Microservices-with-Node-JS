import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export type HttpEventRequest<T = null> = Omit<
  APIGatewayProxyEvent,
  'pathParameters'
> & {
  pathParameters: T;
};

export type HttpResponse = Promise<APIGatewayProxyResult>;

export type HttpResponseBody = {
  description: string;
  id: string;
  price: number;
  title: string;
  image: string;
  count: number;
};
