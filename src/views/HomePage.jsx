import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { houseContext } from '../context/houseContext'
import Room from '../components/Room'

export default function () {
const {house,setHouse} = useContext(houseContext)


useEffect(()=>{
   console.log(house)
},[house])



  return (
    <div style={{display:'flex' ,justifyContent:"center",alignItems:"center", height: '95vh'}}>

        <div style={{height:"600px",width:"700px",display:'flex', flexDirection:"column",justifyContent:"start",alignItems:"center",border: '2px solid lightblue',borderRadius:"10px"}}>
            <h1 style={{color:'lightsteelblue'}}>Smart house</h1>
            <Link  to="/addRoom" style={{color:"lightpurple", display: 'inline-block',fontSize: '40px',}}>+</Link>
            {house.length > 0 ? (house.map((room, i) => <Room key={i} name={room.roomName} color={room.roomColor} />)) : (<></>)}
        </div>
       
    </div>
  )
}
