import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { houseContext } from '../context/houseContext'
import Room from '../components/Room'
import videoBg from '../assets/videoBg.mp4'

export default function () {
const {house,setHouse} = useContext(houseContext)


useEffect(()=>{
   console.log(house)
},[house])



  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted></video>

        <div className='content'>
            <h1 style={{color:'white',fontSize:"30px"}}>Smart house</h1>
            <Link className='link'  to="/addRoom">+</Link>
            {house.length > 0 ? (house.map((room, i) => <Room key={i} name={room.roomName} color={room.roomColor} type={room.selectedRoom} selected ={room.selectedServices} />)) : (<></>)}
        </div>
       
    </div>
  )
}
