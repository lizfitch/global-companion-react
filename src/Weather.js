// Weather.js
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
        );
        const data = await res.json();
        setCity(data.name);
        setWeather(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    });
  }, []);

  if (!weather || weather.cod !== 200) return <p style={{ textAlign: 'center' }}>Loading weather...</p>;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <h2 style={{ marginBottom: '5px' }}>
        <img src={iconUrl} alt={weather.weather[0].description} style={{ verticalAlign: 'middle', height: '48px' }} />
        &nbsp;{city} Weather
      </h2>
      <p style={{ margin: 0 }}>
        {weather.weather[0].description}<br />
        Temp: {Math.round(weather.main.temp)}°F
      </p>
    </div>
  );
};

export default Weather;
