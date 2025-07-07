const request = require('supertest');
const app = require('../server');

describe('GET /products', () => {
  it('returns 200 and a list of products with required fields', async () => {
    const res = await request(app).get('/products');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);

    const product = res.body[0];
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('popularity');
    expect(product).toHaveProperty('weight');
    expect(product).toHaveProperty('images');
  });
});

describe('GET /products with filters', () => {
  it('filters by minPrice and minPopularity correctly', async () => {
    const res = await request(app).get('/products?minPrice=300&minPopularity=4.0');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((product) => {
      expect(product.price).toBeGreaterThanOrEqual(300);
      expect(product.popularity).toBeGreaterThanOrEqual(4.0);
    });
  });

  it('returns all products if no filters are provided', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('returns empty array if no products match filters', async () => {
    const res = await request(app).get('/products?minPrice=100000&minPopularity=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });
});
