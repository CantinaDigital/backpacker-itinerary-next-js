// app/api/search/route.js

export async function POST(req) {
    const body = await req.json();
  
    const { from, to, departureDate, returnDate, passengers } = body;
  
    // Call the RapidAPI SkyScanner API with the provided form data
    const response = await fetch('https://skyscanner-api-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
      },
      body: JSON.stringify({
        from,
        to,
        departureDate,
        returnDate,
        passengers,
      }),
    });
  
    const data = await response.json();
  
    // Extract and sort the top 5 cheapest flights
    const sortedFlights = data.flights.sort((a, b) => a.price - b.price).slice(0, 5);
  
    return new Response(JSON.stringify(sortedFlights), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  