// src/components/BookBlog.jsx
import React, { useState } from 'react';
import blogData from '../data/data';
import BookCard from './BookCard';
import '../styles/BookBlog.css';

const BookBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'self-help', 'productivity', 'fiction'];

  const filteredBooks = selectedCategory === 'all'
    ? blogData
    : blogData.filter(book => book.category === selectedCategory);

  return (
    <div>
      <h1 className="heading">Books & Reviews</h1>

      <div className="filter-container">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="container">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookBlog;
