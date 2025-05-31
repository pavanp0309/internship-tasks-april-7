import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchJobs } from '../api/rapidapi';
import JobCards from '../components/JobCards';
import JobFilters from '../components/JobFilters';
import { usePagination } from '../hooks/usePagination';

const JobListing = ({ jobs, setJobs }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState([0, 200000]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Load jobs on mount
  useEffect(() => {
    async function loadJobs() {
      const allJobs = await fetchJobs(); // fetches from db.json
      setJobs(allJobs);
    }
    loadJobs();
  }, []);  

  // Refresh jobs manually
  const handleRefresh = async () => {
    const updatedJobs = await fetchJobs();
    setJobs(updatedJobs);
  };  

  // Apply filters
  const filterJobs = () => {
    return jobs.filter((job) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(job.category);
      const matchesLocation =
        selectedLocations.length === 0 || selectedLocations.includes(job.location);
      const matchesSalary =
        job.salary >= selectedSalaryRange[0] && job.salary <= selectedSalaryRange[1];
      const matchesSearchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesLocation && matchesSalary && matchesSearchQuery;
    });
  };

  const filteredJobs = filterJobs();
  const { currentData, next, prev, currentPage, maxPage } = usePagination(filteredJobs, 2);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3">
          <JobFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            selectedSalaryRange={selectedSalaryRange}
            setSelectedSalaryRange={setSelectedSalaryRange}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button onClick={handleRefresh} className="btn btn-outline-secondary mb-3">
            🔄 Refresh Jobs
          </button>

          {filteredJobs.length === 0 ? (
            <p>No matching jobs found.</p>
          ) : (
            <JobCards jobs={currentData()} onJobClick={(jobId) => navigate(`/jobs/${jobId}`)} />
          )}

          <div className="d-flex justify-content-center mt-2 mb-4">
            <button
              onClick={prev}
              className="btn btn-danger me-2"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="align-self-center">
              Page {currentPage} of {maxPage}
            </span>
            <button
              onClick={next}
              className="btn btn-primary ms-2"
              disabled={currentPage === maxPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
