

import React from 'react';
import EmployerSidebar from '../components/EmployerSidebar';

const EmployerLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="col-12 col-sm-12 col-md-3 col-lg-3">
        <EmployerSidebar />
      </div>
      {/* Content Area */}
      <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-5">
        <div className="card">
        {children}
        </div>
      </div>
    </div>
  );
};

export default EmployerLayout;
