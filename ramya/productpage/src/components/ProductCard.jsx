import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="navbar">🛍 Amazon Clone Navbar</div>

      <div className="grid-container">
        <div className="product-card">
          <img className="product-image" src="./src/assets/img-1.jpg" alt="" />
          <div className="product-name">Britannia Nutri Choice</div>
          <div className="product-price">$10</div>
          <div className="product-rating">⭐⭐⭐⭐</div>
          <span className="prime-badge">Prime</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="product-card">
          <img className="product-image" src="./src/assets/img-2.jpg" alt="" />
          <div className="product-name">Parle Hide and Seek</div>
          <div className="product-price">$9</div>
          <div className="product-rating">⭐⭐⭐</div>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="product-card">
          <img className="product-image" src="./src/assets/img-3.jpg" alt="" />
          <div className="product-name">Britannia Good Day</div>
          <div className="product-price">$5</div>
          <div className="product-rating">⭐⭐⭐⭐⭐</div>
          <span className="prime-badge">Prime</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="product-card">
          <img className="product-image" src="./src/assets/img-4.jpg" alt="" />
          <div className="product-name">Cadbury Oreo Chocolate </div>
          <div className="product-price">$6</div>
          <div className="product-rating">⭐⭐⭐</div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="footer">© 2025 Amazon Clone</div>
    </>
  );
};

export default ProductCard;
