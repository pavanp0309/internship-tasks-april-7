// src/components/ProductGridPage.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './ProductGridPage.css'

const products = [
  // Sample product data
  { id: 1, name: 'Product 1', price: 29.99, rating: 4.5, image: './src/assets/pro1.jpeg', isPrime: true },
  { id: 2, name: 'Product 2', price: 19.99, rating: 4.0, image: './src/assets/pro2.jpg', isPrime: false },
  { id: 1, name: 'Product 3', price: 29.99, rating: 4.5, image: './src/assets/pro3.jpeg', isPrime: true },
  { id: 2, name: 'Product 4', price: 19.99, rating: 4.0, image: './src/assets/pro4.jpg', isPrime: false },
  { id: 1, name: 'Product 5', price: 29.99, rating: 4.5, image: './src/assets/pro5.jpeg', isPrime: true },
  { id: 2, name: 'Product 6', price: 19.99, rating: 4.0, image: './src/assets/pro6.jpg', isPrime: false },
  { id: 1, name: 'Product 7', price: 29.99, rating: 4.5, image: './src/assets/pro7.jpg', isPrime: true },
  { id: 2, name: 'Product 8', price: 19.99, rating: 4.0, image: './src/assets/pro8.jpg', isPrime: false },
  // Add more products as needed
];

const ProductGridPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold mb-4">Product Grid</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <footer className="fcontainer mt-4">
        <div className="texDiv">
          <p className="mt-2">Your Company is committed to providing the best products and services to our customers. We value your feedback and strive to improve every day.</p>
          <p>Contact us: contact@yourcompany.com | +91 96660 82901</p>
          <div className="social-media-links">
            <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"> Facebook</a> |
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer"> Twitter</a> |
            <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </div>
          <p>© 2023 Your Company</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductGridPage;