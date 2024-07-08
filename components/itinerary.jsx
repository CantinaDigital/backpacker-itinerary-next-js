const Itinerary = ({ itinerary }) => {
  if (!itinerary) return null;

  return (
    <div>
      <h2>Your Itinerary</h2>
      {itinerary.map((flight, index) => (
        <div key={index}>
          <h3>Flight {index + 1}</h3>
          <p>Airline: {flight.airline}</p>
          <p>Price: {flight.price}</p>
          <p>Departure: {flight.departureDate}</p>
          <p>Return: {flight.returnDate}</p>
        </div>
      ))}
    </div>
  );
};

export default itinerary;
