const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 1800 }); // Get gold price every 30 minutes

const getGoldPrice = async () => {
  const cachedPrice = cache.get('goldPrice');

  if (cachedPrice) {
    return cachedPrice;
  }

  const API_KEY = process.env.GOLD_API_KEY;
  const url = `https://www.goldapi.io/api/XAU/USD`;

  const res = await axios.get(url, {
    headers: {
      'x-access-token': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  const price = res.data.price_gram_24k;

  cache.set('goldPrice', price); // Save the cache
  return price;
};

module.exports = getGoldPrice;

