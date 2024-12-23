import React from 'react';

const Weather = ({ data }) => {
  return (
    <div>
      <h2>Méteo dans {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Méteo: {data.weather[0].description}</p>
      <p>Humidité: {data.main.humidity}%</p>
      <p>Vitesse du vent: {data.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
