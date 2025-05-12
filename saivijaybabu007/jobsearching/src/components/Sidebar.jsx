import React from 'react';

const Sidebar = () => {
  return (
    
      <div className="position-sticky pt-3">
        <h5 className="mb-4">All Filters</h5>

        {/* Sector Filter */}
        <div className="mb-4">
          <h6 className="mb-3">Sector</h6>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sector-it" />
            <label className="form-check-label" htmlFor="sector-it">
              IT Services (8)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sector-bfsi" />
            <label className="form-check-label" htmlFor="sector-bfsi">
              BFSI (6)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sector-healthcare" />
            <label className="form-check-label" htmlFor="sector-healthcare">
              Healthcare & Life Sciences (2)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sector-consumer" />
            <label className="form-check-label" htmlFor="sector-consumer">
              Consumer, Retail & Hospitality (2)
            </label>
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mb-4">
          <h6 className="mb-3">Industry</h6>
          <input
            type="text"
            className="form-control form-control-sm mb-3"
            placeholder="Search Industry"
          />
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="industry-it" defaultChecked />
            <label className="form-check-label" htmlFor="industry-it">
              IT Services & Consulting (8)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="industry-financial" />
            <label className="form-check-label" htmlFor="industry-financial">
              Financial Services (3)
            </label>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <h6 className="mb-3">Tags</h6>
          <div className="d-flex flex-wrap gap-2 mb-2">
            <span className="badge bg-secondary">Telecom / ISP (2)</span>
            <span className="badge bg-secondary">FinTech / Payments (2)</span>
          </div>
          <a href="#" className="text-decoration-none small">+4 more</a>
        </div>

        {/* Company Type */}
        <div className="mb-4">
          <h6 className="mb-3">Company type</h6>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="type-foreign" />
            <label className="form-check-label" htmlFor="type-foreign">
              Foreign MNC (12)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="type-corporate" />
            <label className="form-check-label" htmlFor="type-corporate">
              Corporate (7)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="type-indian" />
            <label className="form-check-label" htmlFor="type-indian">
              Indian MNC (5)
            </label>
          </div>
        </div>

        {/* Nature of Business */}
        <div className="mb-4">
          <h6 className="mb-3">Nature of business</h6>
          <div className="d-flex gap-2 mb-2">
            <span className="badge bg-light text-dark">B2B (19)</span>
            <span className="badge bg-light text-dark">B2C (14)</span>
          </div>
          <div className="d-flex gap-2">
            <span className="badge bg-light text-dark">SaaS (1)</span>
          </div>
        </div>

        {/* Companies */}
        <div className="mb-4">
          <h6 className="mb-3">Companies</h6>
          <input
            type="text"
            className="form-control form-control-sm mb-3"
            placeholder="Search Companies"
          />
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="company-airtel" />
            <label className="form-check-label" htmlFor="company-airtel">
              Airtel
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="company-amazon" />
            <label className="form-check-label" htmlFor="company-amazon">
              Amazon
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="company-amgen" />
            <label className="form-check-label" htmlFor="company-amgen">
              Amgen Inc
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="company-apple" />
            <label className="form-check-label" htmlFor="company-apple">
              Apple
            </label>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
