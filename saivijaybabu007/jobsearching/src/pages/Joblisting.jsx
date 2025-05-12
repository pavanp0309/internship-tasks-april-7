import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Joblisting = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 3;

  const loadJobs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch job listings');
      }
      const data = await response.json();
      if (Array.isArray(data.mockJobsList)) {
        setJobs(data.mockJobsList);
      } else {
        throw new Error('Data format is incorrect');
      }
    } catch (err) {
      setError('Failed to load job listings. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Filter jobs based on search
  const filteredJobs = jobs.filter((job) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(lowerSearch) ||
      job.companyname.toLowerCase().includes(lowerSearch) ||
      job.skills.join(', ').toLowerCase().includes(lowerSearch)
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Search Input */}
        <div className="col-12 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title, company or skills"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>

        {/* Job Listings */}
        <div className="col-md-10 col-lg-10 mt-4">
          {isLoading && <p>Loading job listings...</p>}
          {error && <p className="text-danger">{error}</p>}

          {!isLoading && !error && (
            <>
              <div className="row">
                {currentJobs.length === 0 ? (
                  <div className="col-12 mt-3">
                    <p>No details available.</p>
                  </div>
                ) : (
                  currentJobs.map((job) => {
                    const {
                      id,
                      companylogo,
                      title,
                      companyname,
                      description,
                      experience,
                      salary,
                      location,
                      skills,
                      dateOfPost,
                    } = job;

                    return (
                      <NavLink
                        key={id}
                        className="col-12 mb-4 p-3 nav-link"
                        to={`/joblisting/${id}`}
                      >
                        <div className="card">
                          <div className="header d-flex justify-content-between align-items-center">
                            <div className="m-3">
                              <h5 className="card-title">{title}</h5>
                              <h6>{companyname}</h6>
                            </div>
                            <img
                              src={companylogo}
                              alt={`${companyname} logo`}
                              className="company-logo m-3"
                              id="company-logo"
                            />
                          </div>
                          <div className="card-body">
                            <p>
                              <span>
                                <i className="bi bi-suitcase-lg"></i> {experience}
                              </span>{' '}
                              |{' '}
                              <span className="mx-2">
                                <i className="bi bi-currency-rupee"></i>
                                {salary}
                              </span>{' '}
                              |{' '}
                              <span className="mx-2">
                                <i className="bi bi-geo-alt"></i>
                                {location}
                              </span>
                            </p>
                            <p className="card-text">
                              {description.length > 100
                                ? description.slice(0, 103) + '...'
                                : description}
                            </p>
                            <p>
                              <b>
                                <i className="bi bi-clipboard2-plus"></i>
                                <span className="mx-2">Skills Required</span>
                              </b>
                            </p>
                            <p className="card-text">
                              {skills.length > 3
                                ? skills.slice(0, 3).join(', ') + '...'
                                : skills.join(', ')}
                            </p>
                            <div className="d-flex justify-content-between">
                              <p>{dateOfPost}</p>
                              <p>
                                <i className="bi bi-bookmark"></i>
                                <span className="mx-2">
                                  <b>Save</b>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <nav>
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <li
                          key={i + 1}
                          className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                        >
                          <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Joblisting;
