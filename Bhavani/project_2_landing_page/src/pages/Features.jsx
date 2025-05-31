import React from 'react'

const Features = () => {
  return (
    <div className='container'>
      {/* hero section */}
      <section className='container my-5 p-3'>
            <h1 className='fw-bold'>Revolutionize Your Transactions With Secure Solutions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident eos quisquam alias velit modi assumenda incidunt blanditiis sit hic repudiandae, repellat maxime quis recusandae nobis quia maiores inventore perspiciatis?</p>
            <button className="btn btn-primary btn-sm">Get Started</button>
      </section>

      {/*Feature Grid */}
      <section className="container my-4">
        <div className="row g-4">
            <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <h1 className="m-0">⚡</h1>
                </div>
                <div className="col-9">
                    <div className="card-body">
                    <h5 className="card-title">Fast</h5>
                    <p className="card-text">Lightning-fast performance for all teams</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Secure */}
            <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <h1 className="m-0">🔒</h1>
                </div>
                <div className="col-9">
                    <div className="card-body">
                    <h5 className="card-title">Secure</h5>
                    <p className="card-text">Top-notch security features to protect your data</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Reliable */}
            <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <h1 className="m-0">✅</h1>
                </div>
                <div className="col-9">
                    <div className="card-body">
                    <h5 className="card-title">Reliable</h5>
                    <p className="card-text">Dependable performance even under pressure</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Scalable */}
            <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <h1 className="m-0">📈</h1>
                </div>
                <div className="col-9">
                    <div className="card-body">
                    <h5 className="card-title">Scalable</h5>
                    <p className="card-text">Grows with your business seamlessly</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* User-Friendly */}
            <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <h1 className="m-0">🎯</h1>
                </div>
                <div className="col-9">
                    <div className="card-body">
                    <h5 className="card-title">User-Friendly</h5>
                    <p className="card-text">Intuitive design for smooth user experience</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Collaborative */}
            <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="row g-0 align-items-center h-100">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <h1 className="m-0">🤝</h1>
                </div>
                <div className="col-9">
                    <div className="card-body">
                    <h5 className="card-title">Collaborative</h5>
                    <p className="card-text">Built for team collaboration and efficiency</p>
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
                <img src="./src/assets/i1.jpg" className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h5 className="card-title fw-bold">Alice Johnson</h5>
                <p className="card-text">"The platform has completely transformed the way we work. It's fast, secure, and extremely reliable."</p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                </div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="col">
            <div className="card h-100">
                <img src="./src/assets/i2.jpg" className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h5 className="card-title fw-bold">Michael Lee</h5>
                <p className="card-text">"Incredible performance and a user-friendly interface. Collaboration has never been easier."</p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                </div>
            </div>
            </div>

            {/* Card 3 */}
            <div className="col">
            <div className="card h-100">
                <img src="./src/assets/i3.jpg" className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                <h5 className="card-title fw-bold">Sara Ahmed</h5>
                <p className="card-text">"The scalability and security features are just top-tier. A must-have for growing teams."</p>
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
