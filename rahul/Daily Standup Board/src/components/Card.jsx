import React from 'react';
import './Card.css'

const Card = ({ name, yesterday, today, blockers }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong className='StrongTxt'>Yesterday:</strong> {yesterday}</p>
        <p className="card-text"><strong className='StrongTxt'>Today:</strong> {today}</p>
        {blockers && blockers !== 'None' ? (
          <p className="card-text text-danger"><strong className='StrongTxt1'>Problem ❗:</strong> {blockers}</p>
        ) : (
          <p className="card-text text-success"><strong>All clear ✅</strong></p>
        )}
      </div>
    </div>
  );
};

export default Card;
