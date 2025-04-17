import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
       <h1>Contact</h1>
       <p>Welcome to the Contact page</p>
      <p>click on <Link to="/dashboard"><strong>Dashboard</strong></Link> to explore more...</p>
    </div>
  )
}

export default Contact