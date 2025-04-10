import React from 'react';
import "../styles/BookCard.css"

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} className="img" />
      <h3>{book.title}</h3>
      <p>{book.snippet}</p>
      <p>{book.reviewer}</p>
      <p>{book.tags.join(', ')}</p>
      <button className="btn">READ MORE</button>
    </div>
  );
};

export default BookCard;
