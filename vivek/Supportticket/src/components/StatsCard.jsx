import React from 'react';
import  '/node_modules/bootstrap/dist/css/bootstrap.css'

const StatsCard = ({ stats }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h5 className="card-title">Total Tickets</h5>
            <p className="display-6">{stats.total}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h5 className="card-title">Open</h5>
            <p className="display-6 text-primary">{stats.open}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h5 className="card-title">In Progress</h5>
            <p className="display-6 text-info">{stats.inProgress}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h5 className="card-title">Closed</h5>
            <p className="display-6 text-success">{stats.closed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;