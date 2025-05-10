import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <p>click on <Link to="/dashboard"><strong>Dashboard</strong></Link> to explore more...</p>
    </div>
  )
}

export default Home
