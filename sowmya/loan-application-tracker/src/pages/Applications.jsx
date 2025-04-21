import React from 'react';
import { Link } from 'react-router-dom';
import dummyyApplications from '../data/dummyyApplications';

const Applications = () => {
  return (
    <div>
      <h4>Loan Applications</h4>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyyApplications.map(app => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>${app.loanAmount}</td>
              <td>{app.status}</td>
              <td>
                <Link to={`/dashboard/applications/${app.id}`} className="btn btn-sm btn-primary">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
