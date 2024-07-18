import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Services from '../components/Services'
import { useState } from 'react'
import { useEffect } from 'react'
import ServicesStyle from '../components/ServicesStyle'
import { houseContext } from '../context/houseContext'


export default function () {
const {house,setHouse} =useContext(houseContext)
 const location = useLocation()
 const { name, color } = location.state ||  <></> 
 const [showServices, setShowServices] = useState(false)
 function handleClick(){
    setShowServices(true)
 }

 useEffect(()=>{
    console.log(house)
},[house])

  return (
    <div style={{display:'flex' ,justifyContent:"center",alignItems:"center", height: '95vh'}}>
        <div>
       <h1>smart house</h1>
       <h3> room name :{name}</h3>
       <h3> room type :{color}</h3>
       <button onClick={handleClick}>add services</button>
                 {showServices && <Services setShowServices={setShowServices} name ={name}/>}
                 
       </div>
    </div>
  )
}
