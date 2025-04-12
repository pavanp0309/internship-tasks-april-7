import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='container '>
      <Navbar/>
    <div className='container d-flex'>
    <Card 
        className="profile-card mx-3"
        imageURL="./src/assets/SSB.jpeg"
        title="SSB INTERVIEW"
        instructor="Major Kalshi Classes"
        duration="12Days"
        level="Intermediate"
        rating="4.0/5"
        price={5999}
        discountPrice={3999}
        
        isEnrolled={false}
      />
      <Card 
        className="profile-card mx-3"
        imageURL="./src/assets/IndianAirForce.jpg"
        title="AFCAT Exam"
        instructor="Major Kalshi Classes"
        duration="90 Days"
        level="Intermediate"
        rating="4.5/5"
        price={7999}
        discountPrice={6999}
        
        isEnrolled={true}
      />
      <Card 
        className="profile-card mx-3"
        imageURL="./src/assets/cds.webp"
        title="CDS 2 2025"
        instructor="Major Kalshi Classes"
        duration="120 Days"
        level="Intermediate"
        rating="4.5/5"
        price={8999}
        discountPrice={6999}
        
        isEnrolled={true}
      />
      <Card 
        className="profile-card mx-3"
        imageURL="./src/assets/nda.png"
        title="NDA/NA 2 2025"
        instructor="Major Kalshi Classes"
        duration="120 Days"
        level="Intermediate"
        rating="4.0/5"
        price={7999}
        // discountPrice={999}
        
        isEnrolled={false}
      />
    </div>
      
      
      
      
    </div>
  )
}

export default App