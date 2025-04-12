// App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [toast, setToast] = useState(null);
  const [query, setQuery] = useState("");
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      );
      setWeather(response.data);
      setToast("Weather data loaded ✨");
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      setToast("Error fetching weather 🌧️");
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div>
      <img
        src="/Icon-Only-Color.png"
        alt="Spinning Globe"
        style={{
          animation: "spin 6s linear infinite",
          width: "96px",
          margin: "0 auto",
          display: "block"
        }}
      />

      <h1 style={{ textAlign: "center", fontFamily: "Georgia, serif" }}>🌍 Global Companion</h1>

      <div className="card">
        <p>{dateTime}</p>
        {weather && (
          <p>
            📍 {weather.name} – {weather.weather[0].description}, {Math.round(weather.main.temp)}°F
          </p>
        )}
      </div>

      <div className="card">
        <input
          type="text"
          placeholder="Search for places like 'coffee', 'spa', or 'brunch in Miami'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none"
        />
        <button onClick={fetchWeather} style={{ marginTop: "12px" }}>Search</button>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default App;

