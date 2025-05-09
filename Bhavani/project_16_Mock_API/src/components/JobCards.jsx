import React from 'react';

const JobCards = ({ jobs, onJobClick }) => {
  const jobList = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="container">
      <h2 className="text-center mb-4">🔥 Job Search Page</h2>
      <div className="row">
        {jobList.length > 0 ? (
          jobList.map((job, index) => (
            <div key={index} className="col-12 mb-3">
              <div className="card shadow-sm p-3 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={job.logo || "https://via.placeholder.com/60"}
                    alt={job.title}
                    className="me-3"
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                  <div>
                    <h5 className="mb-1">{job.title}</h5>
                    <p className="mb-1 fw-bold">{job.company || "Unknown Company"}</p>
                    <div className="d-flex flex-wrap mb-1">
                      <small className="me-3">
                        <i className="bi bi-briefcase me-1"></i> {job.experience || "0-1 Yrs"}
                      </small>
                      <small className="me-3">
                        <i className="bi bi-currency-rupee me-1"></i> {job.salary || "Not Disclosed"}
                      </small>
                      <small>
                        <i className="bi bi-geo-alt me-1"></i> {job.location || "Unknown Location"}
                      </small>
                    </div>
                    <small className="text-muted">
                      {job.postedDaysAgo || "10 Days Ago"}
                    </small>
                    <div className="text-muted small mt-1">
                      {job.description ? job.description.slice(0, 20) + '...' : 'No description available'}
                    </div>
                    <div className="mt-2">
                      {job.skills?.map((skill, idx) => (
                        <span key={idx} className="badge bg-light text-dark me-2 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span className="badge bg-primary mb-2">{job.rating} ⭐</span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => onJobClick(job.id)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No jobs found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCards;
