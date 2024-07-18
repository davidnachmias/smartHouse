import React, { useState, useContext } from 'react';
import { houseContext } from '../context/houseContext';
import { useEffect } from 'react';

export default function ({ setShowServices,name }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const { house, setHouse } = useContext(houseContext);

  //  function getRoom(){
  //   const room = house.find((room)=>{room.name==name})
  //   console.log(`room:${room},${house[0]},${name}`)
  //  }
 
  function addServices() {
    // Add the selected services to the house context for the specific room
    const updatedHouse = house.map(room => 
      room.name === name ? { ...room, services: [...(room.services || []), ...selectedServices] } : room
    );
    setHouse(updatedHouse);
    setShowServices(false);
  }

  function addService(service) {
    if (!selectedServices.includes(service)) {
      const newServices = [...selectedServices, service];
      setSelectedServices(newServices);
      console.log(`selected: ${newServices}`);
      console.log(selectedServices)
    }
  }
  



  return (
    <div>
      <select onChange={(e) => addService(e.target.value)}>
        <option value="">choose services</option>
        <option value="air conditioner">air conditioner</option>
        <option value="heater">heater</option>
        <option value="stereo system">stereo system</option>
        <option value="lamp">lamp</option>
      </select>
      <button onClick={addServices}>add</button>
    </div>
  );
}

