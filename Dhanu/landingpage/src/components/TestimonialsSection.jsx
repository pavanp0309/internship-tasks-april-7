import React from 'react';


const TestimonialsSection = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2>This is how it works</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <div className="rounded-circle bg-warning text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px' }}>
                <span className="font-weight-bold">1</span>
              </div>
              <h4>Apply online</h4>
              <p className="text-muted">
                Take a few minutes to answer some questions about yourself, and how much you would like to borrow.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="rounded-circle bg-warning text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px' }}>
                <span className="font-weight-bold">2</span>
              </div>
              <h4>Connect with a lender</h4>
              <p className="text-muted">
                Within minutes, a lender can review your application and reach out to you with your options.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="rounded-circle bg-warning text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '50px', height: '50px' }}>
                <span className="font-weight-bold">3</span>
              </div>
              <h4>Become pre-approved</h4>
              <p className="text-muted">
                Work with the lender to become pre-approved and start home shopping.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-10">
              <hr className="border-warning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;