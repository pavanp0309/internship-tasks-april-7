
const ProductCard = ({ product }) => {
    return (
      <div className="card product-card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-success fw-bold">${product.price}</p>
          <p className="card-text">⭐ {product.rating}</p>
          {product.isPrime && <span className="badge bg-primary prime-badge">Prime</span>}
          <button className="btn btn-warning mt-auto">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  