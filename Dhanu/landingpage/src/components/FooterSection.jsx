import React from 'react';


const FooterSection = () => {
  return (
    <footer className="bg-light pt-4 pb-4 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontWeight: 'bold' }}>
                i
              </div>
              <span className="ms-2 fw-bold">HomeLoanGurus</span>
            </div>
            <p className="small">
              401 N. Carroll Ave, Suite 154<br />
              Southlake, TX 76092
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-3">Privacy</h5>
            <ul className="list-unstyled">
              <li><a href="/terms" className="text-decoration-none text-info">Terms and Conditions</a></li>
              <li><a href="/privacy" className="text-decoration-none text-info">Privacy Policy</a></li>
              <li><a href="/unsubscribe" className="text-decoration-none text-info">Unsubscribe</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="small">
              HomeLoanGurus.com is not a mortgage lender or mortgage bank and does not directly offer any mortgage products. This site is not an advertiser for consumer credit as defined in 12 CFR 1026.2(a)(2).
            </p>
            <p className="small text-muted">
              © 2020 HomeLoanGurus.com All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;