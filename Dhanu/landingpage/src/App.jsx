import React from 'react'
import TestimonialsSection from './components/TestimonialsSection'
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <TestimonialsSection/>
      <FooterSection/>
    </div>
  )
}

export default App
