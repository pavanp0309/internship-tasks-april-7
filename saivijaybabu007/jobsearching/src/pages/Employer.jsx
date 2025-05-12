import React from 'react'
import EmployerSidebar from '../components/EmployerSidebar'
import { useNavigate } from 'react-router-dom';

const Employer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="row">
        <div className="col-3 col-sm-3 col-md-3 col-lg-3">
          <EmployerSidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-5">
          <div className="card align-items-center p-2">
            <h1>Welcome to Job Seeker</h1>
            <button
              className="btn btn-outline-primary mb-2"
              onClick={() => navigate('/employer/createjob')}
            >
              Create a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employer
