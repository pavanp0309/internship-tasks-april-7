import React from 'react';
import PropTypes from 'prop-types';
import '../components/CourseCard.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseCard = ({
  id,
  title,
  instructor,
  duration,
  level,
  isEnrolled,
  rating,
  tags,
  thumbnailUrl,
  discountPrice,
  originalPrice,
  children
}) => {
  return (
    <div className="card mb-4 shadow-sm course-card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="text-muted mb-2">{instructor}</h6>

        <div className="d-flex justify-content-between mb-2">
          <span>{duration}</span>
          <span className="text-capitalize">{level}</span>
        </div>
               {/* Rating*/}
      
        <div className="mb-2 text-warning">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              {index < Math.round(rating) ? '★' : '☆'}
            </span>
          ))}
          <span className="ms-2 text-dark fw-bold">{rating}/5</span>
        </div>

        <div className="mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1">{tag}</span>
          ))}
        </div>

        {/* Conditional Price */}
        <div className="mb-3">
          {discountPrice ? (
            <>
              <span className="text-danger fw-bold me-2">₹{discountPrice}</span>
              <span className="text-muted text-decoration-line-through">₹{originalPrice}</span>
            </>
          ) : (
            <span className="fw-bold">₹{originalPrice}</span>
          )}
        </div>

        {/* Status Badges */}
        <div className="mb-3">
          {isEnrolled ? (
            <span className="badge bg-success animate-badge">Enrolled</span>
          ) : (
            <span className="badge bg-info animate-badge">New Course</span>
          )}
        </div>

        {/* Conditional Button */}
        <div className="d-grid">
          <button className={`btn ${isEnrolled ? 'btn-outline-success' : 'btn-primary'}`}>
            {isEnrolled ? 'Continue Course' : 'Enroll Now'}
          </button>
        </div>

        {/* Custom Footer (Bonus) */}
        <div className="mt-3">
          {children}
        </div>
      </div>
    </div>
  );
};

// ✅ Default Props
CourseCard.defaultProps = {
  tags: [],
  discountPrice: null,
  children: null
};

// ✅ Prop Validation
CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  isEnrolled: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  thumbnailUrl: PropTypes.string.isRequired,
  discountPrice: PropTypes.number,
  originalPrice: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default CourseCard;
