import React from 'react';
import cardData from '../data/data.js';  
const Card = () => {
  return (
    <div className="container" >
      <div className="row">
        {cardData.map((card) => (
          <div className="col-md-3" key={card.id}>
            <div className="card" >
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                <div className="text">{card.text}</div>
                </p>
                <h5 className="card-author">{card.author}</h5>
                <p className="tags">{card.tags.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
