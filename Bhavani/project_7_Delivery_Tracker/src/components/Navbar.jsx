import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid px-3">
          <a className="navbar-brand fw-bold" href="#">SWIGGY</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Service</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero d-flex flex-column flex-md-row align-items-center justify-content-between px-3 py-5">
        <div className="hero-text text-center text-md-start mb-4 mb-md-0 col-md-6">
          <h1 className="fw-bold mb-3">
            Order from the best <br /> restaurants near you
          </h1>
          <p className="mb-4">
            Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals.
          </p>
          <button className="btn btn-primary px-4 py-2">Get Started</button>
        </div>
        <div className="hero-image col-md-6 text-center">
          <img src="./src/assets/food.png" alt="Dumplings on a plate" className="img-fluid rounded-4 shadow-sm" />
        </div>
      </section>
    </>
  );
};

export default Navbar;
