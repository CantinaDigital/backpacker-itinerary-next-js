const Itinerary = ({ itinerary }) => {
    if (!itinerary) return null;
  
    return (
      <div>
        <h2>Your Itinerary</h2>
        {itinerary.flights.map((flight, index) => (
          <div key={index}>
            <h3>Flight {index + 1}</h3>
            <p>Airline: {flight.airline}</p>
            <p>Price: {flight.price}</p>
          </div>
        ))}
        {itinerary.hostels.map((hostel, index) => (
          <div key={index}>
            <h3>Hostel {index + 1}</h3>
            <p>Name: {hostel.name}</p>
            <p>Duration: {hostel.duration}</p>
            <p>Price: {hostel.price}</p>
            <img src={hostel.pic} alt={hostel.name} />
          </div>
        ))}
        {itinerary.transportation.map((transpo, index) => (
          <div key={index}>
            <h3>Transport {index + 1}</h3>
            <p>Duration: {transpo.duration}</p>
            <p>Price: {transpo.price}</p>
            <p>Departure Time: {transpo.departureTime}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Itinerary;
  