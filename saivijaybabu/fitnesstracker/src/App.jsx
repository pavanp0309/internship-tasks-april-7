import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import fitness from './data/data'
import FitnessCard from './components/FitnessCard'



const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card bg-dark p-3">
          <div className='header d-flex justify-content-between'>
            <div className="card-left">
              <h4 className='text text-white text-name'>Hello,Sai</h4>
              <p className='text text-white text-welcom'>Welcom to my page</p>
            </div>
            <div className="card-right d-flex">
              <div className='profile '>
              <h4 className='text text-white text-username'>Sai Vijay Babu.B</h4>
              </div>
              <div className='image mx-3'>
                <img src="./src/assets/pic.jpg" alt="No image" className='img'/>
              </div>
              <div className="text-white icons d-flex">
              <i className="bi bi-gear mx-2"></i>
              <i className="bi bi-bell"></i>
              </div>
              
            </div>
          </div>
          <div className="row gy-2" >
            {fitness.map((ele) => (
              <FitnessCard key={ele.id} data={ele} />
            ))
            }

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
