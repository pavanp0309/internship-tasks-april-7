import React from 'react';


const HeroSection = () => {
  return (
    <div className="container-fluid bg-light p-0">
      <div className="row no-gutters">
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="text-center text-md-left">
            <h1 className="display-4 font-weight-bold">Poor credit score?</h1>
            <p className="lead mb-4">
              We help when the bank says no. Our lenders welcome all credit scores, and provide an instant pre-qualification for a loan program.
            </p>
            <button className="btn btn-danger btn-lg">PRE-QUALIFY NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="./src/assets/woman.jpg" 
            alt="Woman using a phone and laptop"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;