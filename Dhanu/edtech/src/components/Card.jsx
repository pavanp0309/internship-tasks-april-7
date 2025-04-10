import React from 'react';

const Card = (props) => {
  const {className,imageURL,title,instructor,duration,level,rating,price,discountPrice,isEnrolled} = props;

  return (
    <div className="profilecard" >
      <div className={`card p-3 shadow-sm border-seconday ${className}`} style={{maxWidth:'22rem',margin:'1rem auto'}}>
      {/* Image */}
      <img src={imageURL} alt={title} className="card-img-top rounded" style={{height:'170px',objectFit:'contain',width:"200px"}} />

      <div className="card-body">
        {/* Title & Instructor */}
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{instructor}</h6>

        {/* Duration & Level */}
        <p className="card-text text-muted mb-1">{duration} · {level}</p>

        {/* Rating */}
        <p className="card-text text-secondary mb-2">⭐ {rating}</p>

        {/* Price Section */}
        <div className="mb-2">
          {discountPrice ? (
            <>
              <span className="text-dark fw-bold me-2"><del>Rs. {discountPrice}</del></span>
              <span>Rs. {price}</span>
            </>
          ) : (
            <span className="fw-bold">Rs. {price}</span>
          )}
        </div>

       
       

        {/* Status */}
        <div className="mb-2">
          {isEnrolled ? (
            <span className="text-success fw-semibold">✅ Enrolled</span>
          ) : (
            <span className="text-secondary fw-semibold">🆕 New Course</span>
          )}
        </div>

        {/* Action Button */}
        <button className={`btn w-100 ${isEnrolled ? 'btn-success' : 'btn-primary'}`}>
          {isEnrolled ? 'Continue Course' : 'Enroll Now'}
        </button>
      </div>
    </div>
    </div>
    

  );
};

export default Card;