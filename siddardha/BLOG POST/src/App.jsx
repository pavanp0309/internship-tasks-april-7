import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Card from './componets/Card'


const App = () => {
  return (
    <div>
          <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/blog" element={<Card />} />
      </Routes>
    </Router>
      {/* <Card/> */}
    </div>
  )
}

export default App
