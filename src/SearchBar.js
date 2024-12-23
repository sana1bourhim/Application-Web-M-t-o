import React, { useState } from 'react';

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) { // Assurez-vous que la ville n'est pas une chaîne vide
      fetchWeather(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Saisir une ville"
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
