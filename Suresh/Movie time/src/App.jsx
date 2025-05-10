import React from 'react'
import Card from './Card'
import { movies } from './components/Movies'

const App = () => {
  return (
    <>
    <h1 className='heading'>Movie Booking</h1>
    <div className="body">
    {      
      movies.map((ele)=><Card movies details={ele}/>)
     }
    </div>
     
    </>
  )
}

export default App
