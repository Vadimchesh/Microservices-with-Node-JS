import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from '../../schema';
import { productList } from 'src/productList';

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  console.log(event);
  return formatJSONResponse({
    body: productList,
    event,
  });
};

export const main = middyfy(getProductById);
