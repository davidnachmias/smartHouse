import React, { useState, useContext } from 'react';
import { houseContext } from '../context/houseContext';

export default function Services({ setShowServices, name, selectedServices, setSelectedServices }) {
  const { house, setHouse } = useContext(houseContext);
  const [selectedService, setSelectedService] = useState('');

  function addService() {
    if (!selectedService) {
      alert("Please select a service");
      return;
    }

    // בדיקת האם השירות שנבחר הוא מערכת סטריאו וכבר קיים ברשימה
    if (selectedService === 'stereo system' && selectedServices.includes(selectedService)) {
      alert("Only one stereo system allowed per room");
      return;
    }

    // בדיקת האם השירות שנבחר הוא דוד והחדר אינו חדר אמבטיה
    if (selectedService === 'heater' && name !== 'bathroom') {
      alert("Heater can only be added to the bathroom");
      return;
    }

    // בדיקת האם יש יותר מ-5 שירותים בחדר
    if (selectedServices.length >= 5) {
      alert("Only 5 services allowed per room");
      return;
    }

    // הוספת השירות לרשימה אם לא עובר את הולידציות
    const newServices = [...selectedServices, selectedService];
    setSelectedServices(newServices);

    // עדכון רשימת החדרים בבית
    const updatedHouse = house.map(room =>
      room.roomName === name ? { ...room, selectedServices: newServices } : room
    );
    setHouse(updatedHouse);
    setShowServices(false);
  }

  return (
    <div>
      <select className='select-services' onChange={(e) => setSelectedService(e.target.value)}>
        <option value="">Choose services</option>
        <option value="air conditioner">Air Conditioner</option>
        <option value="heater">Heater</option>
        <option value="stereo system">Stereo System</option>
        <option value="lamp">Lamp</option>
      </select>
      <button style={{backgroundColor:"transparent", color:"white"}} onClick={addService}>Add</button>
    </div>
  );
}
