import React from "react";

const amenityIcons = {
  parking: "🚗",
  pool: "🏊‍♂️",
  gym: "🏋️‍♀️",
};

const PropertyCard = ({
  id,
  title,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  amenities,
  isAvailable,
  imageUrl,
  isVerified,
  children,
}) => {
  return (
    <div className="property-card" key={id}>
      <img src={imageUrl} alt={title} className="property-image" />

      <div className="property-header">
        <h2 className="property-title">{title}</h2>
        {isVerified && <span className="verified">✔ Verified</span>}
      </div>

      <p className="property-location">📍 {location}</p>

      <div className="property-price">
        ${price.toLocaleString()} • {area} sqft
      </div>

      <div className="property-details">
        <span>🛏 {bedrooms} Beds</span>
        <span>🛁 {bathrooms} Baths</span>
      </div>

      <div className="property-amenities">
        {amenities.map((amenity) => (
          <span key={amenity} className="amenity">
            {amenityIcons[amenity] || "🔧"} {amenity}
          </span>
        ))}
      </div>

      <div className={`availability ${isAvailable ? "available" : "not-available"}`}>
        {isAvailable ? "🏠 Available" : "⛔ Not Available"}
      </div>

      <div className="property-actions">
        <button className="contact-btn" disabled={!isAvailable}>
          Contact Agent
        </button>
        {children}
      </div>
    </div>
  );
};

PropertyCard.defaultProps = {
  imageUrl: "https://via.placeholder.com/400x300?text=Property+Image",
};

export default PropertyCard;
