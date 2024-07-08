const axios = require('axios');

const getFlights = async (from, to, departureDate, returnDate, passengers) => {
  try {
    const response = await axios.get('https://rapidapi.com/flight-https://rapidapi.com/ntd119/api/sky-scanner3', {
      headers: {
        'X-RapidAPI-Key': '96c87ada63msh67bbef2a1951985p12a0b5jsn0977d3897eea',
        'X-RapidAPI-Host': 'skyscanner.p.rapidapi.com'
      },
      params: {
        origin: from,
        destination: to,
        departureDate,
        returnDate,
        adults: passengers
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
