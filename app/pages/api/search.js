import { getFlights } from '../../backend/services/flightService';

export default async function handler(req, res) {
  const { from, to, departureDate, returnDate, passengers } = req.body;

  try {
    const flightData = await getFlights(from, to, departureDate, returnDate, passengers);
    const sortedFlights = flightData.sort((a, b) => a.price - b.price).slice(0, 5);

    res.status(200).json(sortedFlights);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching flights' });
  }
};
