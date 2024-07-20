import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Room({ name, color, selectedServices, type }) {
  const navigate = useNavigate(); 

  function handleClick() {
    navigate("/InsideRoom", { state: { name, color, selectedServices, type } });
  }

  return (
    <div 
      onClick={handleClick} 
      style={{
        minWidth: '120px', /* רוחב מינימלי */
        minHeight: '120px', /* גובה מינימלי */
        display: 'flex', /* שימוש ב-Flexbox */
        alignItems: 'center', /* ממרכז את התוכן אנכית */
        justifyContent: 'center', /* ממרכז את התוכן אופקית */
        textAlign: 'center',
        border: '5px solid black',
        borderRadius: '10px',
        backgroundColor: color,
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        padding: '10px', /* ריווח פנימי כדי למנוע הצמדה של התוכן לדפנות */
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h1 style={{ margin: 0, fontSize: '24px', color: 'white' }}>{name}</h1>
    </div>
  );
}
