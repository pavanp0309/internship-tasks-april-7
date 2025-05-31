import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <section>
      <h1 className='heading'>Travelling Blog</h1>
      <div className='container'>
        <div className="card">
          <img src="./src/assets/b1.png" alt="" className='img'/>
          <h3>Adventure Awaits in Nature’s Lap</h3>
          <p>Embark on an unforgettable journey through untouched forests and majestic waterfalls. Perfect for thrill-seekers and nature lovers.</p>
          <p>Aarav Mehra</p>
          <p>adventure, nature, travel, waterfall</p>
          <button className='btn'>READ MORE</button>
        </div>
        <div className="card">
          <img src="./src/assets/b2.png" alt="" className='img'/>
          <h3>Cultural Escape in Kerala</h3>
          <p>Discover the rich cultural heritage of Kerala, from tranquil backwaters to vibrant traditional performances.</p>
          <p>Devika Nair</p>
          <p>kerala, culture, india</p>
          <button className='btn'>READ MORE</button>
        </div>
        <div className="card">
          <img src="./src/assets/b3.png" alt="" className='img1'/>
          <h3>Sun, Sand, and Serenity at Bapatla Beach</h3>
          <p>Soak in the sun and unwind at one of Andhra Pradesh’s hidden coastal gems — Bapatla Beach.</p>
          <p>Rithvik Singh</p>
          <p>beach, bapatla, sun, coast</p>
          <button className='btn'>READ MORE</button>
        </div>
    </div>
    </section>
  )
}

export default Card
