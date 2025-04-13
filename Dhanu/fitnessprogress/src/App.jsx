import React from 'react'
import FitnessCard from './components/FitnessCard'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { workout } from './data/data'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="row gy-2">
          {
           workout.map((ele)=>(

            <FitnessCard data={ele}/>
            

           )) 
           

          }
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default App
