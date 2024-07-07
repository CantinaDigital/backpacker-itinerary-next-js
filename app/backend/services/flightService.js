const axios = require('axios');

const getFlights = async (from, to) => {
  try {
    const response = await axios.get('https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/', {
      params: {
        apiKey: 'YOUR_API_KEY',
        country: 'US',
        currency: 'USD',
        locale: 'en-US',
        originPlace: from,
        destinationPlace: to,
        outboundDate: '2023-09-01', // Example date, should be dynamic
        adults: 1 // Example passenger count, should be dynamic
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};

module.exports = {
  getFlights
};
