import React, { useState, useEffect } from "react";

const GlobalCompanion = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(({ coords }) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=af91f03a8bed86bc8f9ca5d056d0d81c`)
        .then(res => res.json())
        .then(data => setWeather(data));
    });
  }, []);

  const handleSearch = () => {
    if (!query) return;
    setToast(`Searching for "${query}"...`);
    setTimeout(() => setToast(""), 5000);
  };

  return (
    <div style={{ fontFamily: "Georgia, serif", padding: "40px", textAlign: "center" }}>
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
      <h1>🌍 Global Companion</h1>
      {weather && (
        <p>
          📍 {weather.name} – {weather.weather[0].description}, {Math.round(weather.main.temp)}°F
        </p>
      )}
      <input
        type="text"
        placeholder="Search for places like 'coffee', 'spa', or 'brunch in Miami'"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "12px",
          width: "60%",
          maxWidth: "400px",
          marginTop: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc"
        }}
      />
      <br />
      <button onClick={handleSearch} style={{
        marginTop: "12px",
        padding: "10px 24px",
        borderRadius: "10px",
        background: "#0058cc",
        color: "white",
        border: "none"
      }}>Search</button>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default GlobalCompanion;