import React from 'react'

const Multicard = () => {
  return (
    <div className='container'>
         
        <div className="card card1">
            <h1 className='text header-text'>I need to get a <br />car insurance</h1>
            <p className='text card-text'>To get your free personalized car insurence <br />quote faster make sure to have</p>
            <button className='btn'>Readmore</button>
            <img src="./src/assets/red-sports-car-png-1.png" alt="dhanush chandra" />
        </div>

        <div className=" card card2">
            <h1 className='text header-text'></h1>
            <p className='text card-text'>To get your free personalized car insurence quote faster make sure to have</p>
            <button className='btn'>Readmore</button>
            <img src="./src/assets/car2.png" alt="dhanush chandra" />
        </div>

        <div className=" card card3">
            <h1 className='text header-text'>I need to get a car insurance</h1>
            <p className='text card-text'>To get your free personalized car insurence quote faster make sure to have</p>
            <button className='btn'>Readmore</button>
            <img src="./src/assets/car3.png" alt="dhanush chandra" />
        </div> 
    </div>
  )
}

export default Multicard
