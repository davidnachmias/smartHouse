import React, { useState, useEffect } from 'react';

// פונקציה לעזור לקרוא ולשמור צבעים ב-localStorage
const getStoredColor = (service) => {
  const storedColors = JSON.parse(localStorage.getItem('serviceColors')) || {};
  return storedColors[service] || 'red';
};

const saveColor = (service, color) => {
  const storedColors = JSON.parse(localStorage.getItem('serviceColors')) || {};
  storedColors[service] = color;
  localStorage.setItem('serviceColors', JSON.stringify(storedColors));
};

export default function ServicesStyle({ service }) {
  const [color, setColor] = useState(() => getStoredColor(service));

  function handleClick() {
    const newColor = color === 'red' ? 'green' : 'red';
    setColor(newColor);
    saveColor(service, newColor); // שמור את הצבע החדש ב-localStorage
  }

  return (
    <div
      onClick={handleClick}
      style={{
        margin: "10px",
        width: "120px",
        height: "50px",
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // הוספת צל
      }}
    >
      <h2 style={{ margin: 0, fontSize: '16px', color: 'white' }}>{service}</h2>
    </div>
  );
}
