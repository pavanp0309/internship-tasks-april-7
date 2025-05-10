import React from 'react'
import { useEffect, useState } from 'react'
import './Features.css'

const Features = () => {

    
    let [dogImage, setDogImage] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
    .then(response => response.json())
    .then(data => setDogImage(data.message))
  },[])
  
  if(!dogImage)return <h1>loading...</h1>

  const ImageClick = (imageUrl) => {
    const imageName = imageUrl.split('/').pop();
    alert(`Image Name: ${imageName} `);
  };

  return (
    <div className="features">
        <h1>Dogs</h1>
        {dogImage && dogImage.map((dog) => (
          <img 
            key={dog} 
            width={"30%"} 
            height={"400px"} 
            src={dog} 
            alt="dog" 
            onClick={() => ImageClick(dog)} 
          />
        ))}
    </div>
  );
}

export default Features
