import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { usePagination } from '../hooks/usePagination';

const PostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:3000/createdjobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/createdjobs/${id}`);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  const {
    currentData,
    next,
    prev,
    currentPage,
    maxPage,
  } = usePagination(jobs, itemsPerPage);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📋 All Posted Jobs</h2>
        <button className="btn btn-danger" onClick={() => navigate('/employee')}>
          Back to Dashboard
        </button>
      </div>

      <div className="row">
        {currentData().length > 0 ? (
          currentData().map((job) => (
            <div key={job.id} className="col-12 mb-3">
              <div className="card shadow-sm p-3 position-relative">
                {/* Delete Button */}
                <button
                  className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 m-2"
                  onClick={() => handleDelete(job.id)}
                >
                  🗑 Delete
                </button>

                <div className="d-flex flex-row align-items-center justify-content-between">
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
                          <i className="bi bi-currency-rupee me-1"></i> {job.salary || "Not Disclosed"}
                        </small>
                        <small className="me-3">
                          <i className="bi bi-geo-alt me-1"></i> {job.location || "Unknown Location"}
                        </small>
                        <small>
                          <i className="bi bi-building me-1"></i> {job.jobType || "N/A"}
                        </small>
                      </div>
                      <div className="text-muted small mt-1">
                        {job.description ? job.description.slice(0, 60) + '...' : 'No description available'}
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
                    <span className="badge bg-primary mb-2">{job.rating || '4.2'} ⭐</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No jobs posted yet.</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {jobs.length > itemsPerPage && (
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-outline-primary me-2" onClick={prev} disabled={currentPage === 1}>
            ⬅ Prev
          </button>
          <span className="align-self-center mx-2">Page {currentPage} of {maxPage}</span>
          <button className="btn btn-outline-primary ms-2" onClick={next} disabled={currentPage === maxPage}>
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default PostedJobs;
