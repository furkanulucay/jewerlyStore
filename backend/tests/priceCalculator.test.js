const calculatePrice = require('../services/priceCalculator');

test('calculates price correctly', () => {
  const price = calculatePrice(0.85, 2.1, 60);
  expect(price).toBeCloseTo((0.85 + 1) * 2.1 * 60, 2);
});
