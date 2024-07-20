import React, { useContext, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Services from '../components/Services';
import ServicesStyle from '../components/ServicesStyle';
import { houseContext } from '../context/houseContext';
import insideVideo from '../assets/insideVideo.mp4';

export default function SmartHouse() {
  const { house, setHouse } = useContext(houseContext);
  const location = useLocation();
  const { name , color,type} = location.state || {};

  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const selectedRoom = house.find((room) => room.roomName === name);
    if (selectedRoom && selectedRoom.selectedServices) {
      setSelectedServices(selectedRoom.selectedServices);
    }
  }, [house, name]);

  function handleClick() {
    setShowServices(true);
  }

  return (
    <div className='main'>
      <video src={insideVideo} loop autoPlay muted></video>
      <div className='insideRoomContainer'>
        <div>
          <h1 style={{fontSize:"50px"}}>Smart House</h1>
          <h3 style={{fontSize:"30px"}}>Room Name: {name}</h3>
          <h3 style={{fontSize:"30px"}}>Room Type: {type}</h3>
          <button className='inside-addButton' onClick={handleClick}>Add Services</button>
        </div>
        <div className='service-container'>
          {showServices && (
            <Services
              setShowServices={setShowServices}
              name={name}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
            />
          )}
          {selectedServices.map((service, serviceIndex) => (
            <ServicesStyle key={serviceIndex} service={service} />
          ))}
        </div>
        <Link className='link-inside' to="/">To Home</Link>
      </div>
    </div>
  );
}
