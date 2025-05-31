import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateJob = () => {
  const navigate = useNavigate();
  const employer = JSON.parse(localStorage.getItem('employeeDetails'));

  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    category: '',
    salary: '',
    experience: '',
    rating: '',
    logo: '',
    description: '',
    skills: [],
    postedDaysAgo: '',
    jobHighlights: [],
    jobMatchScore: '',
    moreAboutRole: '',
    role: '',
    industryType: '',
    department: '',
    employmentType: '',
    roleCategory: '',
    education: '',
    keySkills: [],
    employerId: employer?.employeeId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/createdjobs', jobData);
      navigate('/employee/posted-jobs');
    } catch (err) {
      console.error('Error posting job:', err);
    }
  };

  return (
    <div className="container ">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0 text-center">📝 Create a New Job</h3>
        </div>
        <div className="card-body text-uppercase">
          <form onSubmit={handleSubmit}>
            {/* Basic Details */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Job Title</label>
                <input type="text" className="form-control" name="title" value={jobData.title} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Company</label>
                <input type="text" className="form-control" name="company" value={jobData.company} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label fw-bold">Location</label>
                <input type="text" className="form-control" name="location" value={jobData.location} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Category</label>
                <input type="text" className="form-control" name="category" value={jobData.category} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Salary</label>
                <input type="text" className="form-control" name="salary" value={jobData.salary} onChange={handleChange} required />
              </div>
            </div>

            {/* Experience & Rating */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Experience</label>
                <input type="text" className="form-control" name="experience" value={jobData.experience} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Rating</label>
                <input type="text" className="form-control" name="rating" value={jobData.rating} onChange={handleChange} required />
              </div>
            </div>

            {/* Logo and Description */}
            <div className="mb-3">
              <label className="form-label fw-bold">Logo URL</label>
              <input type="text" className="form-control" name="logo" value={jobData.logo} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Description</label>
              <textarea className="form-control" rows="3" name="description" value={jobData.description} onChange={handleChange} required />
            </div>

            {/* Skills and Highlights */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Skills (comma separated)</label>
                <input type="text" className="form-control" name="skills" value={jobData.skills.join(', ')} onChange={(e) => setJobData({ ...jobData, skills: e.target.value.split(', ') })} />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Job Highlights (comma separated)</label>
                <input type="text" className="form-control" name="jobHighlights" value={jobData.jobHighlights.join(', ')} onChange={(e) => setJobData({ ...jobData, jobHighlights: e.target.value.split(', ') })} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Job Match Score</label>
              <input type="text" className="form-control" name="jobMatchScore" value={jobData.jobMatchScore} onChange={handleChange} required />
            </div>

            {/* More About Role */}
            <div className="mb-3">
              <label className="form-label fw-bold">More About Role</label>
              <textarea className="form-control" rows="3" name="moreAboutRole" value={jobData.moreAboutRole} onChange={handleChange} required />
            </div>

            {/* Role Details */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label fw-bold">Role</label>
                <input type="text" className="form-control" name="role" value={jobData.role} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Industry Type</label>
                <input type="text" className="form-control" name="industryType" value={jobData.industryType} onChange={handleChange} required />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Department</label>
                <input type="text" className="form-control" name="department" value={jobData.department} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Employment Type</label>
                <input type="text" className="form-control" name="employmentType" value={jobData.employmentType} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Role Category</label>
                <input type="text" className="form-control" name="roleCategory" value={jobData.roleCategory} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Education</label>
              <input type="text" className="form-control" name="education" value={jobData.education} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Key Skills (comma separated)</label>
              <input type="text" className="form-control" name="keySkills" value={jobData.keySkills.join(', ')} onChange={(e) => setJobData({ ...jobData, keySkills: e.target.value.split(', ') })} />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/employee')}>
                ⬅ Back to Dashboard
              </button>
              <button type="submit" className="btn btn-success">
                ✅ Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
