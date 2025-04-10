import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <section>
        <h1 className='heading'>Chennai Super Kings</h1>
        <div className='container'>
            <div className='card'>
                <img src="./src/assets/Dhoni.webp" alt="MSD" className='img'/>
                <h3>Autobiography of MSD</h3>
                <p>MS Dhoni is a legendary Indian cricketer known for his calm leadership, sharp wicketkeeping, and explosive finishing skills. He led India to major victories, including the 2007 T20 World Cup and 2011 ODI World Cup.</p>
                <p>Sakshi Dhoni</p>
                <p>#finsher  #thala  #mahi</p>
                <button className='btn'>READ MORE</button>
            </div>
            <div className='card'>
                <img src="./src/assets/raina.jpg" alt="Suresh Raina" className='img' />
                <h3>Autobiography of Raina</h3>
                <p>Suresh Raina is a former Indian cricketer known for his aggressive batting, sharp fielding, and consistent middle-order performances. He was a key player in limited-overs formats and a vital part of India's 2011 World Cup-winning team.</p>
                <p>Priyanka choudary</p>
                <p>#No.3  #chinnathala  #Mr.ipl</p>
                <button className='btn'>READ MORE</button>
            </div>
            <div className='card'>
                <img src="./src/assets/jadeja.webp" alt="Jadeja" className='img1'/>
                <h3>Autobiography of Jadeja</h3>
                <p>Ravindra Jadeja is an Indian all-rounder known for his explosive batting, accurate left-arm spin, and exceptional fielding. He has been a crucial asset in all formats of the game, contributing with both bat and ball.</p>
                <p>Rivaba Jadeja</p>
                <p>#Allrounder  #Thalapathy  #Jaddu</p>
                <button className='btn'>READ MORE</button>
            </div>
        </div>
    </section>
    
  )
}

export default Card
