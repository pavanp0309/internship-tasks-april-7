import React from 'react'

const Features = () => {
  return (
    <div className='container'>
      {/* hero section */}
      <section className='container my-5 p-3'>
            <h1 className='fw-bold text-center'>Landing page for Project </h1>
            <p>We’ve distilled everything we know about conversion into ready-to-use templates for landing pages, popups, and sticky bars. Use our drag-and-drop builder to make a beautiful page fast—or start with a blank canvas.</p>
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
                <img src="./src/assets/pic1.webp" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                <h5 className="card-title fw-bold">Your Guide to Smarter Financial Planning</h5>
                <p className="card-text">Unlock the tools you need to take control of your financial future. Our expertly crafted guide provides practical strategies for budgeting, saving, and investing</p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                </div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="col">
            <div className="card h-100">
                <img src="./src/assets/pic2.webp" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                <h5 className="card-title fw-bold">Innovating Tomorrow, Today</h5>
                <p className="card-text">Step into a world where creativity meets technology. This image captures the spirit of progress — a bold vision of what's possible when innovation takes center stage. Whether you're building something new or reimagining the future, let this be your inspiration to move forward with purpose.</p>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                </div>
            </div>
            </div>

            {/* Card 3 */}
            <div className="col">
            <div className="card h-100">
                <img src="./src/assets/pic3.webp" className="card-img-top" alt="..."  />
                <div className="card-body text-center">
                <h5 className="card-title fw-bold">"Empowering Ideas Through Collaboration"</h5>
                <p className="card-text">Great ideas don’t happen in isolation — they’re sparked through teamwork, creativity, and a shared vision. This image reflects the synergy that drives innovation, where minds come together to build, solve, and grow. Whether you're launching a project or leading a team, success starts with connection.</p>
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
