const axios = require('axios');

const getHostels = async (location) => {
  try {
    const response = await axios.get('https://api.hostelworld.com/v1/hotels', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      params: {
        location,
        currency: 'USD',
        limit: 10
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching hostels:', error);
    throw error;
  }
};

module.exports = {
  getHostels
};
