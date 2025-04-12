// Foursquare.js
import React, { useState } from 'react';

const Foursquare = () => {
  const [query, setQuery] = useState('');
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_FOURSQUARE_API_KEY; // ✅ Secure .env version

  const searchPlaces = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.foursquare.com/v3/places/search?query=${query}&limit=6&near=Las Vegas`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      setVenues(data.results || []);
    } catch (err) {
      console.error('Foursquare API error:', err);
      setError('Search failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2 style={{ color: '#004e92' }}>📍 Explore Nearby</h2>
      <input
        type="text"
        value={query}
        placeholder="Search anything: coffee, gym, perfume..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', marginRight: '10px' }}
      />
      <button
        onClick={searchPlaces}
        style={{ padding: '10px 16px', fontSize: '16px', borderRadius: '6px', backgroundColor: '#004e92', color: '#fff' }}
      >
        Search
      </button>

      {loading && <p>🌍 Searching for fabulous spots...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '20px' }}>
        {venues.map((venue, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#f5f5f5',
              padding: '12px',
              borderRadius: '10px',
              margin: '10px auto',
              maxWidth: '400px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 5px' }}>{venue.name}</h3>
            <p style={{ margin: 0 }}>{venue.location?.formatted_address || 'No address listed'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foursquare;


