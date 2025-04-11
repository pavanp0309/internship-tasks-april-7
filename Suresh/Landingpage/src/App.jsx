import React from 'react'
import { Routes, Route } from "react-router-dom";
import Head from './components/Head'
import Body from './components/Body'
import Footer from './components/Footer'
import Product from './components/Product'


const App = () => {
  return (
    <>
    <Routes>
      
    
      <Route path='/product' element={<Product/>} />
      <Head />
      <Body />
      <Footer />
      
      </Routes>
    </>
  )
}

export default App
