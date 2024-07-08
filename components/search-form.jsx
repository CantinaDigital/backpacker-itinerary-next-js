import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      onSearch(data);
    } catch (error) {
      console.error('Error fetching itinerary:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="from"
        placeholder="Origin city, country"
        value={formData.from}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="to"
        placeholder="Destination city, country"
        value={formData.to}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="departureDate"
        placeholder="Departure date"
        value={formData.departureDate}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="returnDate"
        placeholder="Return date"
        value={formData.returnDate}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="passengers"
        placeholder="Number of passengers"
        value={formData.passengers}
        onChange={handleChange}
        min="1"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
