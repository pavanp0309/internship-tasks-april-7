import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import fitness from './data/data'
import Card from './components/Card'
import ViewCard from './components/ViewCard'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="p-3 my-4">
          <div className="row gy-2" >
            {fitness.map((ele) => (
              <Card key={ele.id} data={ele} />
            ))
            }
          </div>
        </div>
      </div>
      <ViewCard/>
      <Footer />
    </>
  )
}

export default App
