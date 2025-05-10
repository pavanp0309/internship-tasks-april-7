import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact Page</h1>
      <div>
      <button className='btn btn-success mx-2 my-2' onClick={()=> navigate('info')}>Info</button>
      
      <button className='btn btn-success' onClick={()=> navigate('form')}>Form</button>
      </div>
    </div>
  )
}

export default Contact
