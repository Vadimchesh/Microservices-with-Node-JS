export default {
  type: 'object',
  properties: {
    product: { type: 'string' },
    count: { type: 'number' },
    description: { type: 'string' },
    id: { type: 'string' },
    price: { type: 'number' },
    title: { type: 'string' },
  },
  required: ['name', 'count', 'description', 'id', 'price', 'title'],
} as const;
