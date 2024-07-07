const axios = require('axios');

const getTransportations = async (from, to) => {
  try {
    const response = await axios.get('https://api.flixbus.com/v1/trips', {
      params: {
        from,
        to,
        currency: 'USD',
        apiKey: 'YOUR_API_KEY'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching transportations:', error);
    throw error;
  }
};

module.exports = {
  getTransportations
};
