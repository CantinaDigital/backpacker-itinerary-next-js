import { getFlights } from '../../backend/services/flightService';
import { getHostels } from '../../backend/services/hostelService';
import { getTransportations } from '../../backend/services/transportationService';

export default async function handler(req, res) {
  const { from, homeBase, length, destinations, budget } = req.body;

  try {
    const flightData = await getFlights(from, homeBase);
    const hostelData = await getHostels(homeBase);
    const transportationData = await getTransportations(destinations[0], homeBase);

    const itinerary = {
      flights: flightData,
      hostels: hostelData,
      transportation: transportationData
    };

    res.status(200).json(itinerary);
  } catch (error) {
    res.status(500).json({ error: 'Error creating itinerary' });
  }
};
