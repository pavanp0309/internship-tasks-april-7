import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <section>
        <h1 className='heading'>HISTORY OF CARTOONS</h1>
        <div className='container'>
            <div className='card'>
                <img src="./src/assets/img1.jpg" alt="mr.bean" className='img' />
                <p><b>MR.Bean</b></p>
                <p>Mr. Bean is immature, self-absorbed, extremely competitive and brings various abnormal schemes and contrivances to everyday tasks.personal teddy bear and lifelong best friend. Despite being inanimate, Bean pretends that Teddy is alive.</p>
                <p>#bean  #comedy  #toys</p>
                <button className='btn'>Read More</button>
            </div>
            <div className='card'>
                <img src="./src/assets/img2.jpg" alt="power rangers" className='img' />
                <p><b>Power Rangers</b></p>
                <p>When "morphed," the rangers become powerful superheroes wearing color-coded skin-tight spandex suits and helmets with opaque visors; identical except in individual rangers' color, helmet design, and minor styling such as incorporating a skirt.</p>
                <p>#colours  #action   #comedy</p>
                <button className='btn'>Read More</button>
            </div>
            <div className='card'>
                <img src="./src/assets/img3.jpg" alt="tom&jerry" className='img1' />
                <p><b>Tom & Jerry</b></p>
                <p>In his attempts to catch Jerry, Tom often has to deal with Spike, known as "Killer" and "Butch" in some shorts, an angry, vicious but gullible bulldog who tries to attack Tom for bothering him or his son Tyke while trying to get Jerry.</p>
                <p>#tom   #gerry   #comedy</p>
                <button className='btn'>Read More</button>
            </div>
        </div>
    </section>
    
  )
}

export default Card
