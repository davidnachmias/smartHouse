import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { houseContext } from '../context/houseContext';
import { useNavigate } from 'react-router-dom'

export default function () {
  const navigate = useNavigate()
  const [selectedRoom,setSelectedRoom] =useState('')
  const [roomName,setRoomName] = useState("")
  const [roomColor, setRoomColor] = useState('');
  const {house,setHouse} = useContext(houseContext)
  
   function validRoom(){
     if(roomName === "" || roomName.length >9){
      return false
     }
     if(selectedRoom === ""){
      return false
     }
    return true
   }

   function createRoom(){
    if(!validRoom()){
      navigate("/")
    return alert("ERROR")
    }
    setHouse([...house, { selectedRoom, roomName, roomColor, selectedServices:[] }])
    alert("room created")
    navigate("/")
   }

   useEffect(()=>{
     console.log(house)
   },[house])




   
  return (
    <div className='addRoomMain'>
        <div style={{height:"600px",width:"700px",display:'flex', flexDirection:"column",justifyContent:"space-around",alignItems:"center",border: '10px solid white',borderRadius:"10px"}}>
             <h1 style={{color:"white",fontSize:"80px"}}>Smart house</h1>
             <select className='addRoomSelect' onChange={(e)=>{setSelectedRoom(e.target.value)}}>
                <option value="">choose room</option>
                <option value="kitchen">kitchen</option>
                <option value="bathroom">bathroom</option>
                <option value="living room">living room</option>
            </select>
            <input className='addRoomInput' onChange={(e)=>{setRoomName(e.target.value)}} style={{width:"300px", height:"30px"}} type="text"placeholder='room name' />
            <input className='addRoomInput' onChange={(e)=>{setRoomColor(e.target.value)}} style={{width:"300px", height:"30px"}} type="text" placeholder='room color' />
            <button className='addRoomButton' onClick={createRoom}>createRoom</button>
        </div>
    </div>
  )
}
