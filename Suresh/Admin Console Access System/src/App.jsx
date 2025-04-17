import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
