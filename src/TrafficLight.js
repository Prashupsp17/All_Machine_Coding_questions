import React from 'react';
import { useState, useEffect } from 'react';
const TrafficLight = () => {
  const [light, setLight] = useState('green');

  useEffect(() => {
    let timeout = null;
    switch (light) {
      case 'green':
        timeout = setTimeout(() => {
          setLight('yellow');
        }, 3000);
        break;
      case 'yellow':
        timeout = setTimeout(() => {
          setLight('red');
        }, 3000);
        break;
      case 'red':
        timeout = setTimeout(() => {
          setLight('green');
        }, 3000);
        break;
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [light]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          backgroundColor: light === 'green' ? 'green' : 'grey',
          borderRadius: '50%',
          height: '40px',
          width: '40px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: light === 'yellow' ? 'yellow' : 'grey',
          borderRadius: '50%',
          height: '40px',
          width: '40px',
        }}
      ></div>
      <div
        style={{
          backgroundColor: light === 'red' ? 'red' : 'grey',
          borderRadius: '50%',
          height: '40px',
          width: '40px',
        }}
      ></div>
    </div>
  );
};
export default TrafficLight;
