import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import data from './components/data'
import './Properties.css'

const Properties = () => {
return (
    <div className="container">
        <h1 className="title-1">Dream House</h1>
        <div className="row">
            {data.map((property) => (
                <div key={property.id} className="col-12 col-md-3 col-lg-3 mx-2" id="card">
                    <img className="card-img-top" id="card-img" src={property.img} alt={property.title} />
                    <div className="card-body">
                        <p className="card-text company">
                            <b>Company:</b> {property.company}
                        </p>
                        <h5 className="card-title title my-2">{property.title}</h5>
                        <p className="card-text location">
                            <b>Location:</b> {property.location}
                        </p>
                        <p className="card-text price">
                            <b>Price:</b> {property.price}
                        </p>
                        <p className="card-text area">
                            <b>Area:</b> {property.area}
                        </p>
                        <p className="card-text verified">
                            <b>Verified by Govt:</b> {property.verified ? "Verified" : "Not Verified"}
                        </p>
                        <div className="basics">
                            <p className="card-text bedrooms">
                                <b>Bedrooms:</b> {property.bedrooms} BHK flats
                            </p>
                            <p className="card-text amenities">
                                <b>Amenities:</b> {property.amenities ? "Yes" : "No"}
                            </p>
                            <p className="card-text available">
                                {property.available ? (
                                    <span className="avai">✅ Available</span>
                                ) : (
                                    <span className="non-avai">❌ Not Available</span>
                                )}
                            </p>
                        </div>
                        <a href="#" className="btn">
                            {property.available ? (
                                <span className="btn btn-primary">Contact Now</span>
                            ) : (
                                <span className="btn btn-danger">Contact Now</span>
                            )}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Properties;