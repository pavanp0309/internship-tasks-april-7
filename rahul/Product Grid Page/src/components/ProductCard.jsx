import React from 'react';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-img" />
      <h2 className="product-card-title">{product.name}</h2>
      <p className="product-card-price">Price : ${product.price}</p>
      <div className="product-card-rating">
        <span className="rating mb-3">Rate : ⭐ {product.rating}</span>
        {product.isPrime && <span className="prime-badge mb-3">Prime</span>}
      </div>
      <div className="btnDiv">
        <button className="product-card-button btn BuyNow">Buy Now</button>
        <button className="product-card-button btn AddtoCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
