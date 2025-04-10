import React from 'react'
import data from '../data/data'

const Card = () => {
    return (
        <div className='container'>
            <div className="row">
                {data.map((ele) => (
                    
                   <div key={ele.id} className="col-12 col-sm-12 col-md-6 col-lg-6">
                     <div className="card my-3" >
                    <div className="row g-0">
                      <div className="col-md-6">
                      <img src={(`${ele.imageUrl}`)} className="card-img-top" id='card-img-top' alt="..."/>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">{ele.title}</h5>
                          <p className="card-text"><b>Location:</b>{ele.location}</p>
                          <p className="card-text"><b>Price $:</b>{ele.price}</p>
                          <p className="card-text"><b>Area:</b>{ele.area}</p>
                          <p className="card-text"><b>BedRooms:</b>{ele.bedrooms}</p>
                          <p className="card-text"><b>BathRooms:</b>{ele.bathrooms}</p>
                          <p className="card-text"><b>Amenities:</b>{ele.amenities[0]}</p>
                          <p className="card-text"><b>Verified:</b>{ele.isVerified?"true":"false"}</p>
                          {/* <p className="card-text"><b>Verified:</b>{true}</p> */}
                          <p className="card-text"><b>Available:</b>{ele.isAvailable?"true":"false"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                   </div>
                 
                ))}
            </div>

        </div>
    )
}

export default Card
