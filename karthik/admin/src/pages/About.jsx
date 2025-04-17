import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
       <h1>About</h1>
       <p>Welcome to the About page</p>
      <p>click on <Link to="/dashboard"><strong>Dashboard</strong></Link> to explore more...</p>
    </div>
  )
}

export default About;