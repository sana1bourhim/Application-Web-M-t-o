import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Weather from './Weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = 'c4304629ecfc29bbe2d659f219410485';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Méte🌦️sa</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;

