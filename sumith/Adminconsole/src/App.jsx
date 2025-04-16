import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './common/Navbar'
import Services from './components/Services'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Login/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </div>
  )
}

export default App
