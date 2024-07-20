import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import AddRoom from './views/AddRoom'
import Room from './components/Room'
import {houseContext} from "./context/houseContext"
import InsideRoom from './views/InsideRoom'

function App() {
  const [house,setHouse] = useState([])
  return (
    <houseContext.Provider value={{house,setHouse}}>
    <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/addRoom'element={<AddRoom/>}/>
      <Route path='/InsideRoom' element={<InsideRoom/>}/>
    </Routes>
    </houseContext.Provider>
  )
}

export default App
