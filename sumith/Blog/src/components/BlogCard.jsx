import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.webp'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.webp'
import pic8 from '../assets/pic8.jpg'

const BlogCard = () => {
  return (
   
    <div>
        <div className='container'>
      <div className='card'>
      <img src={pic1} alt="" width={'300px'} height={'200px'} />
      <button className='button'>TECH</button>
      <h3>Samsung laptop is exploding again Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur?</h3>
      <p>by Tyler Platt</p>
      <button className='btn'>READMORE</button>
      </div>

      <div className='card'>
      <img src={pic2} alt="" width={'300px'} height={'200px'}/>
      <button className='button'>TECHNOLOGY</button>
      <h3>Why is the Tesla Cybertruk designed the way it is?</h3>
      <p>An exploration into the truck's polarising design. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      <button className='btn'>READMORE</button>
      </div>

      <div className='card'>
      <img src={pic3} alt="" width={'300px'} height={'200px'} />
      <button className='button'>POPULAR</button>
      <h3>How to keep Going When you Don't know what's next?</h3>
      <p>The future can be scary, But there are ways to deal with that fear. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <button className='btn'>READMORE</button>
      </div>
    </div>
    </div>
   
    
    
   
    
  )
}

export default BlogCard
