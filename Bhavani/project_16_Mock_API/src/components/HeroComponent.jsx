import React from 'react';

const HeroComponent = () => {
  return (
    <div
      className="row align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("./src/assets/poster.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="col-12 col-md-6 p-5">
        <h1 style={{ fontWeight: '700', fontSize: '48px', color: '#2c3e50' }}>
          Find the <br /> most exciting <br /> startup jobs
        </h1>
        <div className="d-flex mt-4">
          <input
            type="text"
            placeholder="Job Title or keyword"
            className="form-control me-2"
            style={{ maxWidth: '300px' }}
          />
          <input
            type="text"
            placeholder="Location BD"
            className="form-control me-2"
            style={{ maxWidth: '200px' }}
          />
          <button className="btn btn-danger">Find Job</button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
