import React from 'react';
import data from '../data/dummyApplications';
import ApplicationCard from '../components/ApplicationCard';

function Applications() {
  return (
    <div className="container mt-5 applications-container">
      <h3 className="text-center text-light mb-4">Loan Applications</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.map((app) => (
          <div key={app.id} className="col">
            <ApplicationCard {...app} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;
