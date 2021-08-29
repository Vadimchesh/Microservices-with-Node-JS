"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.respondJson = void 0;
const productList_json_1 = require("productList.json");
function respondJson(body, statusCode) {
    return {
        statusCode,
        body: JSON.stringify(body),
    };
}
exports.respondJson = respondJson;
async function handler(event) {
    const { id } = event.pathParameters;
    if (!id)
        return respondJson({ message: 'No product' }, 400);
    const product = productList_json_1.default.find(({ id }) => id === id);
    if (!product)
        return respondJson({ message: 'No product' }, 400);
    return respondJson({ ...product }, 200);
}
exports.handler = handler;
