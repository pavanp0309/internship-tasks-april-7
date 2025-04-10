import React from 'react'

const Features = () => {
  return ( 
        <div className='container'>
          {/* hero section */}
          <section className='container my-5 p-3'>
                <h1 className='fw-bold'>Elevate Your Entertainment With Hassle-Free Booking</h1>
                <p>Upgrade your movie experience with fast, secure, and hassle-free bookings.Enjoy seamless access to showtimes, tickets, and personalized entertainment—all in one place.</p>
                <button className="btn btn-primary btn-sm">Get Started</button>
          </section>
    
          {/* Now Showing */}
          <section className="container my-4">
            <div className="row g-4">
                <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="row g-0 align-items-center h-100">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <h1 className="m-0">🎞️</h1>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h5 className="card-title">Now Showing</h5>
                        <p className="card-text">Browse the latest blockbusters and trending films in one place.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Easy Booking	 */}
                <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="row g-0 align-items-center h-100">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <h1 className="m-0">🎟️</h1>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h5 className="card-title">Easy Booking	</h5>
                        <p className="card-text">Book your favorite seats in just a few clicks—fast and secure.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Nearby Theatres */}
                <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="row g-0 align-items-center h-100">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <h1 className="m-0">📍</h1>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h5 className="card-title">Nearby Theatres</h5>
                        <p className="card-text">Instantly find cinemas near you with available shows.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Showtime Alerts */}
                <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="row g-0 align-items-center h-100">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <h1 className="m-0">🕒</h1>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h5 className="card-title">Showtime Alerts</h5>
                        <p className="card-text">Get notified when your favorite movie is about to start.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* User Reviews */}
                <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="row g-0 align-items-center h-100">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <h1 className="m-0">🌟</h1>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h5 className="card-title">User Reviews</h5>
                        <p className="card-text">Read real audience reviews before booking your ticket.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Cashback & Discounts */}
                <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="row g-0 align-items-center h-100">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <h1 className="m-0">💳</h1>
                    </div>
                    <div className="col-9">
                        <div className="card-body">
                        <h5 className="card-title">Cashback & Discounts</h5>
                        <p className="card-text">Enjoy special offers, rewards, and premium discounts every time.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
           {/* Testimonial Section */}
            <section className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* Card 1 */}
                <div className="col">
                <div className="card h-100">
                    <img src="./src/assets/christopher-nolan.jpg.webp" className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Christopher Nolan</h5>
                    <p className="card-text">"Cinema is not just entertainment; it's an emotion that touches lives."</p>
                    </div>
                    <div className="card-footer bg-white border-0 text-center">
                    </div>
                </div>
                </div>
    
                {/* Card 2 */}
                <div className="col">
                <div className="card h-100">
                    <img src="./src/assets/steven-spielberg.jpg.avif" className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Steven Spielberg</h5>
                    <p className="card-text">"IStorytelling is the most powerful way to put ideas into the world."</p>
                    </div>
                    <div className="card-footer bg-white border-0 text-center">
                    </div>
                </div>
                </div>
    
                {/* Card 3 */}
                <div className="col">
                <div className="card h-100">
                    <img src="./src/assets/satyajit-ray.jpg" className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Satyajit Ray</h5>
                    <p className="card-text">"Every frame should speak to the audience—cinema is a language of visuals.."</p>
                    </div>
                    <div className="card-footer bg-white border-0 text-center">
                    </div>
                </div>
                </div>
            </div>
            </section>
    
        </div>
      
  )
}

export default Features
