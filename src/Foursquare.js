// Foursquare.js
import React, { useState } from 'react';

const Foursquare = () => {
  const [query, setQuery] = useState('');
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_FOURSQUARE_API_KEY;

  const searchPlaces = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(`https://api.foursquare.com/v3/places/search?near=${query}&limit=6`, {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      });
      const data = await response.json();
      setVenues(data.results || []);
    } catch (err) {
      console.error("Foursquare API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>📍 Explore Nearby</h2>
      <input
        type="text"
        value={query}
        placeholder="Enter a city (e.g. Paris)"
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', borderRadius: '6px', marginRight: '10px' }}
      />
      <button onClick={searchPlaces} style={{ padding: '8px 14px', fontSize: '16px', borderRadius: '6px', backgroundColor: '#0077cc', color: 'white' }}>
        Search
      </button>

      {loading && <p>🌍 Searching...</p>}

      <div style={{ marginTop: '20px' }}>
        {venues.map((venue, i) => (
          <div key={i} style={{ background: '#eef2f9', padding: '10px', margin: '10px auto', borderRadius: '8px', maxWidth: '400px' }}>
            <h3 style={{ margin: '0 0 5px' }}>{venue.name}</h3>
            <p style={{ margin: 0 }}>{venue.location.formatted_address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foursquare;

