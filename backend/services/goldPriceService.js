const axios = require('axios');

const getGoldPrice = async () => {
  const API_KEY = process.env.GOLD_API_KEY;
  const url = `https://www.goldapi.io/api/XAU/USD`;

  const res = await axios.get(url, {
    headers: {
      'x-access-token': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return res.data.price;
};

module.exports = getGoldPrice;
