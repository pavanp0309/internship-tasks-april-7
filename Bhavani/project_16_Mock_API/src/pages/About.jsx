import React from 'react';

const About = () => {
  return (
    <div>
      {/* Section 1: Background with overlay */}
      <div
        className="position-relative text-white"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <img
          src="./src/assets/poster-1.png"
          alt="About Background"
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ objectFit: 'cover', zIndex: -1 }}
        />

        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-start px-4 px-md-5">
          <h1 className="display-4 fw-bold">
            Who We are <br /> & Our Smart Mission
          </h1>
          <p className="lead mt-3 mb-4" style={{ maxWidth: '800px' }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </p>
          <a href="#contact" className="btn btn-success btn-lg">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Section 2: Our Mission & Story */}
      <div className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold text-dark mb-3">Our Mission & Story</h2>
            <p className="fst-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="fst-italic text-muted">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.
            </p>
            <a href="#start" className="btn btn-success mt-3">
              Start Today Now
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="./src/assets/man.jpg"
              alt="Our Mission"
              className="img-fluid"
              style={{ maxWidth: '100%', borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      {/* Section 3: Meet My Team */}
      <div className="container">
        <h2 className="fw-bold text-dark text-center mb-3">Meet My Team</h2>
        <p className="fst-italic text-muted text-center mb-5">
          Professional & Dedicated Team
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card shadow-sm border-0">
              <img
                src="./src/assets/team-1.webp"
                alt="Team Member 1"
                className="card-img-top"
                style={{ borderRadius: '20px', height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-muted">Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-0">
              <img
                src="./src/assets/team-2.webp"
                alt="Team Member 2"
                className="card-img-top"
                style={{ borderRadius: '20px', height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Shivangi Preet</h5>
                <p className="card-text text-muted">HR Manager</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-0">
              <img
                src="./src/assets/team-3.webp"
                alt="Team Member 3"
                className="card-img-top"
                style={{ borderRadius: '20px', height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Ananya Sharma</h5>
                <p className="card-text text-muted">CEO & Manager</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-0">
              <img
                src="./src/assets/team-4.webp"
                alt="Team Member 4"
                className="card-img-top"
                style={{ borderRadius: '20px', height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Rahul Gilkrist</h5>
                <p className="card-text text-muted">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 4: Customer Reviews */}
<div className="container my-5 py-5">
  <h2 className="fw-bold text-dark text-center mb-3">Good Reviews By Customers</h2>
  <p className="fst-italic text-muted text-center mb-5">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
  </p>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 shadow-sm border-0 p-3">
        <div className="card-body">
          <h5 className="card-title">⭐️⭐️⭐️⭐️⭐️</h5>
          <p className="card-text text-muted">
            "Excellent service and great communication throughout the process!"
          </p>
          <p className="text-end text-success fw-bold">– Emma R.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 shadow-sm border-0 p-3">
        <div className="card-body">
          <h5 className="card-title">⭐️⭐️⭐️⭐️</h5>
          <p className="card-text text-muted">
            "Highly recommend this team. They delivered exactly what I needed."
          </p>
          <p className="text-end text-success fw-bold">– Arjun M.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 shadow-sm border-0 p-3">
        <div className="card-body">
          <h5 className="card-title">⭐️⭐️⭐️⭐️⭐️</h5>
          <p className="card-text text-muted">
            "Professional and reliable. The results exceeded my expectations!"
          </p>
          <p className="text-end text-success fw-bold">– Priya K.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;
