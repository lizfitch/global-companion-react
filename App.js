// App.js
import React from 'react';
import Weather from './Weather';
import Foursquare from './Foursquare';
import SafetyInfo from './SafetyInfo';

const App = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#004e92' }}>🌍 Global Companion</h1>

      <Weather city="Las Vegas" />

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px dashed #ccc' }} />

      <Foursquare />

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px dashed #ccc' }} />

      <SafetyInfo />

      <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '14px', color: '#999' }}>
        ✨ Powered by Global Pass – Travel Smart. Live Luxe. ✨
      </div>
    </div>
  );
};

export default App;

