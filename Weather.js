// Weather.js
import React, { useState, useEffect } from 'react';

const Weather = ({ city = "New York" }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = "af91f03a8bed86bc8f9ca5d056d0d81c"; // your magic 🔑

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    };
    fetchWeather();
  }, [city]);

  if (!weather || weather.cod !== 200) return <p>☁️ Loading weather...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px 0' }}>🌤️ {weather.name} Weather</h2>
      <p style={{ margin: 0 }}>
        {weather.weather[0].description} <br />
        Temp: {Math.round(weather.main.temp)}°F
      </p>
    </div>
  );
};

export default Weather;

