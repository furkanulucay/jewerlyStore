const request = require('supertest');
const app = require('../server');

describe('GET /products', () => {
  it('should return a list of products with required fields', async () => {
    const res = await request(app).get('/products');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const product = res.body[0];
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('popularityScore');
    expect(product).toHaveProperty('weight');
    expect(product).toHaveProperty('images');
  });
});