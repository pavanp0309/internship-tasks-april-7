import React from 'react';

const QuickStats = ({ total, open, closed }) => {
  return (
    <div className="row mb-5">
      <div className="col-md-4">
        <div className="card p-3 text-center shadow-sm">
          <h5>Total Tickets</h5>
          <p className="display-4">{total}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3 text-center shadow-sm">
          <h5>Open Tickets</h5>
          <p className="display-4">{open}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3 text-center shadow-sm">
          <h5>Closed Tickets</h5>
          <p className="display-4">{closed}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
