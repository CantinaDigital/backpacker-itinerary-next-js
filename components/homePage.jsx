import { useState } from 'react';
import axios from 'axios';

const HomePage = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    homeBase: '',
    length: '',
    destinationsCount: '',
    budget: '',
    destinations: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDestinationsChange = (index, value) => {
    const updatedDestinations = [...formData.destinations];
    updatedDestinations[index] = value;
    setFormData({ ...formData, destinations: updatedDestinations });
  };

  const handleAddDestination = () => {
    setFormData({
      ...formData,
      destinations: [...formData.destinations, '']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/search', formData);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching itinerary:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="from" placeholder="Taking off from" value={formData.from} onChange={handleChange} />
      <input type="text" name="homeBase" placeholder="Main destination/home base" value={formData.homeBase} onChange={handleChange} />
      <input type="number" name="length" placeholder="Length of journey" value={formData.length} onChange={handleChange} />
      <input type="number" name="destinationsCount" placeholder="Number of destinations" value={formData.destinationsCount} onChange={handleChange} />
      {formData.destinations.map((destination, index) => (
        <input key={index} type="text" placeholder={`Destination ${index + 1}`} value={destination} onChange={(e) => handleDestinationsChange(index, e.target.value)} />
      ))}
      <button type="button" onClick={handleAddDestination}>Add Destination</button>
      <input type="number" name="budget" placeholder="Budget in USD" value={formData.budget} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default HomePage;
