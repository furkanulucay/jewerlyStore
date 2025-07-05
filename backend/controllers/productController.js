const products = require('../products.json');
const getGoldPrice = require('../services/goldPriceService');
const calculatePrice = require('../services/priceCalculator');

const getAllProducts = async (req, res) => {
  try {
    const goldPrice = await getGoldPrice();
    const enrichedProducts = products.map(product => {
      const price = calculatePrice(product.popularityScore, product.weight, goldPrice);
      return { ...product, price: parseFloat(price.toFixed(2)) };
    });

    res.json(enrichedProducts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { getAllProducts };
