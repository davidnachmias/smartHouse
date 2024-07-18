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
    setHouse([...house, { selectedRoom, roomName, roomColor }])
    alert("room created")
    navigate("/")
   }

   useEffect(()=>{
     console.log(house)
   },[house])




   
  return (
    <div style={{display:'flex' ,justifyContent:"center",alignItems:"center", height: '95vh'}}>
        <div style={{height:"600px",width:"700px",display:'flex', flexDirection:"column",justifyContent:"space-around",alignItems:"center",border: '2px solid lightblue',borderRadius:"10px"}}>
             <h1>Smart house</h1>
             <select onChange={(e)=>{setSelectedRoom(e.target.value)}}>
                <option value="">choose room</option>
                <option value="kitchen">kitchen</option>
                <option value="bathroom">bathroom</option>
                <option value="living room">living room</option>
            </select>
            <input onChange={(e)=>{setRoomName(e.target.value)}} style={{width:"300px", height:"30px"}} type="text"placeholder='room name' />
            <input onChange={(e)=>{setRoomColor(e.target.value)}} style={{width:"300px", height:"30px"}} type="text" placeholder='room color' />
            <button onClick={createRoom}>createRoom</button>
        </div>
    </div>
  )
}
