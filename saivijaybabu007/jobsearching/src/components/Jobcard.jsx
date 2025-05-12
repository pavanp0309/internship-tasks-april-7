import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Jobcard = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJob = async () => {
      try {
        const res = await fetch(`http://localhost:3000/mockJobsList/${id}`);
        if (!res.ok) throw new Error("Job not found");
        const data = await res.json();
        setJob(data);
      } catch (err) {
        setError('Failed to load job details');
      }
    };
    loadJob();
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!job) return <p>Loading job details...</p>;

  return (
    <div className="container mt-4 mt-5">
      
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          {/* Main Job Card */}
          <div className="card shadow p-4 mb-4">
            <div className="header d-flex justify-content-between align-items-center mb-3">
              <div className="card-text">
                <h3 className="mb-1">{job.title}</h3>
                <h5 className="text-muted">{job.companyname}</h5>
              </div>
                <img src={job.companylogo} alt={job.companyname} className='id-img' />
            </div>

            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>

            <div className="d-flex justify-content-between mt-4">
              <NavLink to="/joblisting">
                <button className="btn btn-outline-primary">← Back</button>
              </NavLink>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>

          {/* Description & Skills Card */}
          <div className="card shadow p-4">
            <p><strong>Description:</strong></p>
            <p>{job.description}</p>
            <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
            <p className="text-muted"><strong>Posted on:</strong> {job.dateOfPost}</p>
          </div>
          <div className="card shadow p-4 mt-4">
            <p><b>IndustryType:</b>{job.IndustryType}</p>
            <p><b>Department:</b>{job.Department}</p>
            <p><b>EmploymentType:</b>{job.EmploymentType}</p>
            <p><b>RoleCategory:</b>{job.RoleCategory}</p>
            <p><b>Aboutcompany:</b>{job.Aboutcompany}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Jobcard;
