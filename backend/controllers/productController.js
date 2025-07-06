const products = require('../products.json');
const getGoldPrice = require('../services/goldPriceService');
const calculatePrice = require('../services/priceCalculator');

const getAllProducts = async (req, res) => {
  try {
    const goldPrice = await getGoldPrice();

    const enrichedProducts = products.map(product => {
    const price = calculatePrice(product.popularityScore, product.weight, goldPrice);
    const popularityOutOfFive = parseFloat((product.popularityScore * 5).toFixed(1));
    return {
      ...product,
      price: parseFloat(price.toFixed(2)),
      popularity: popularityOutOfFive
    };
  });

    // Query Parameters
    const {
      minPrice,
      maxPrice,
      minPopularity,
      maxPopularity
    } = req.query;

    // Filter
    const filteredProducts = enrichedProducts.filter(product => {
      if (minPrice && product.price < parseFloat(minPrice)) return false;
      if (maxPrice && product.price > parseFloat(maxPrice)) return false;
      if (minPopularity && product.popularity < parseFloat(minPopularity)) return false;
      if (maxPopularity && product.popularity > parseFloat(maxPopularity)) return false;
      return true;
    });

    res.json(filteredProducts);
    
  } catch (err) {
    console.error('Error in getAllProducts:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { getAllProducts };
