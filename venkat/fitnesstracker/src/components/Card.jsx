import React from 'react'

const Card = () => {
  return (
    <section>
        <h3 className='heading'> Daily Workout </h3>

        <div className='container'>
            <div className='card'>
                <p><b>Body Pulse  - (per day)</b></p>
                <button className='btn btn-success'><i class="bi bi-heart-pulse"></i></button>
                <h3>788</h3>
                <p></p>
                <button className='btn'>Know More</button>

                
            </div>
            <div className='card'>
               <p><b>Calorie Intake - (per day)</b></p>
                <p></p>
                <p></p>
                <button className='btn'>Know More</button>

            </div>
            <div className='card'>
               <p><b>Milestone - (Weight)</b></p>
                <p></p>
                <button className='btn'>Know More</button>

   
            </div>
        </div>
    </section>
    
  )
}

export default Card
