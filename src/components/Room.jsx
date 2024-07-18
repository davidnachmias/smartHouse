import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Room({ name,color }) {
  function handleClick(){
    navigate("/InsideRoom",{ state: { name, color } })
  }
  const navigate = useNavigate() 
  return (
    <div onClick={handleClick} style={{ width: '100px', height: '100px', textAlign: 'center', border: '5px solid black', padding: '15px', borderRadius: '5px', backgroundColor:color }}>
      <h1>{name}</h1>
    </div>
  );
}