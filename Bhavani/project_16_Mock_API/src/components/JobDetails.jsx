import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobFilters from './JobFilters'; // Import the JobFilters component

const JobDetails = ({
  jobs,
  selectedCategories,
  setSelectedCategories,
  selectedLocations,
  setSelectedLocations,
  selectedSalaryRange,
  setSelectedSalaryRange, 
}) => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((job) => job.id.toString() === jobId);

  if (!job) return <div className="container mt-4">Job not found.</div>;

  return (
    <div className="container my-4">
      <button className="btn btn-outline-warning mb-3" onClick={() => navigate(-1)}>
        ← Back to Jobs
      </button>

      <div className="row">
        {/* Sidebar for Filters */}
        <div className="col-md-3 mb-3">
          <JobFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            selectedSalaryRange={selectedSalaryRange}
            setSelectedSalaryRange={setSelectedSalaryRange}
          />
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* Header Card */}
          <div className="card shadow p-4 mb-4">
            <div className="d-flex justify-content-between">
              <div>
                <h3>{job.title}</h3>
                <p className="fw-semibold mb-1">{job.company}</p>
                <div className="d-flex flex-wrap mb-2 text-muted small">
                  <span className="me-4"><i className="bi bi-briefcase me-1"></i>{job.experience}</span>
                  <span className="me-4"><i className="bi bi-currency-rupee me-1"></i>{job.salary}</span>
                  <span><i className="bi bi-geo-alt me-1"></i>{job.location}</span>
                </div>
                <div className="text-muted small">
                  Posted: {job.postedDaysAgo} | Openings: {job.openings || 'N/A'} | Applicants: {job.applicants || 'N/A'}
                </div>
              </div>
              <div className="text-end">
                <img
                  src={job.logo || "https://via.placeholder.com/60"}
                  alt={job.title}
                  style={{ width: 60, height: 60 }}
                  className="mb-2"
                />
                <div>
                  <button className="btn btn-outline-primary btn-sm me-2">Save</button>
                  <button className="btn btn-primary btn-sm">Apply</button>
                </div>
              </div>
            </div>
          </div>

          {/* Job Highlights */}
          {job.jobHighlights && (
            <div className="card p-3 mb-4">
              <h5>Job highlights</h5>
              <ul>
                {job.jobHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Match Score */}
          {typeof job.jobMatchScore === 'number' && (
            <div className="card p-3 mb-4">
              <h5>Job match score</h5>
              <p className="mb-0">Score: {job.jobMatchScore}%</p>
            </div>
          )}

          {/* Description */}
          <div className="card p-3 mb-4">
            <h5>Job description</h5>
            <p>{job.description}</p>
          </div>

          {/* More About Role */}
          <div className="card p-3 mb-4">
            <h5>More about this role</h5>
            <p>{job.moreAboutRole}</p>
          </div>

          {/* Detailed Role Info */}
          <div className="card p-3">
            <h5>Role details</h5>
            <ul>
              <li><strong>Role:</strong> {job.role}</li>
              <li><strong>Industry Type:</strong> {job.industryType}</li>
              <li><strong>Department:</strong> {job.department}</li>
              <li><strong>Employment Type:</strong> {job.employmentType}</li>
              <li><strong>Role Category:</strong> {job.roleCategory}</li>
              <li><strong>Education:</strong> {job.education}</li>
              <li><strong>Key Skills:</strong> {job.keySkills?.join(', ')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
