import { useState } from 'react';
import HomePage from '../components/homePage';
import Itinerary from '../components/itinerary';

const Home = () => {
    const [itinerary, setItinerary] = useState(null);
  
    const handleSearch = (data) => {
      setItinerary(data);
    };
  
    return (
      <div>
        <HomePage onSearch={handleSearch} />
        <Itinerary itinerary={itinerary} />
      </div>
    );
  };
  
  export default Home;
