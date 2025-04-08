import React from 'react'

const Card = () => {
  return (
   <div>
    <h1 className='maintitle'>Untold Stories</h1>
    <div className='container'>
    
    <div className='card'>
        <img src="./src/assets/Letters from kargil.webp" alt="Letters From Kargil" />
        <h1 className='title'>Letters From Kargil</h1>
        <h3 className='text'>Diksha Dwivedi</h3>
        <p className='text text-desc'>"Letters from Kargil" by Diksha Dwivedi offers a deeply personal and emotional look at the Kargil War of 1999. Rather than focusing solely on the strategic aspects of the conflict, the book centers on the human experience, primarily through the letters and diaries of the soldiers who fought and often sacrificed their lives.</p>
        <button className='card-btn'>Readmore⬇️</button>
    </div>
    <div className='card'>
        <img src="./src/assets/Indias most fearless.jpg" alt="India's Most Fearless" />
        <h1 className='title'>India's Most Fearless</h1>
        <h3 className='text'>Shiv Aroor|Rahul Singh</h3>
        <p className='text text-desc'>"India's Most Fearless" is a series of books that delve into the true stories of remarkable courage displayed by Indian military personnel.The books present real-life narratives of Indian soldiers who displayed exceptional courage in challenging and often life-threatening situations.</p>
        <button className='card-btn'>Readmore⬇️</button>
    </div>
    <div className='card'>
        <img src="./src/assets/The brave.webp" alt="The brave" />
        <h1 className='title'>The brave</h1>
        <h3 className='text'>Rachna Bisht Rawat</h3>
        <p className='text text-desc'>"The Brave" by Rachna Bisht Rawat, as it pertains to Indian military bravery.Focus on Param Vir Chakra Awardees,Humanizing Heroism,Patriotic and Inspiring.The books present real-life narratives of Indian soldiers who displayed exceptional courage in challenging and often life-threatening situations.</p>
        <button className='card-btn'>Readmore⬇️</button>
    </div>
    <div className='card'>
        <img src="./src/assets/Kargil.jpg" alt="Kargil" />
        <h1 className='title'>Kargil</h1>
        <h3 className='text'>General V.P.Malik</h3>
        <p className='text text-desc'>"Kargil: From Surprise to Victory" by General V.P. Malik offers a comprehensive and authoritative account of the 1999 Kargil War.The book delves into the strategic and tactical aspects of the war, examining the reasons behind Pakistan's infiltration and India's response.</p>
        <button className='card-btn'>Readmore⬇️</button>
    </div>
   
   </div>
   </div>
   
    
    
  )
}

export default Card
