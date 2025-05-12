import React, { useState } from 'react';
import { useEffect } from 'react';

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    companyname: '',
    companylogo: '',
    description: '',
    experience: '',
    location: '',
    salary: '',
    rating: '',
    skills: '',
    industryType: '',
    department: '',
    employmentType: '',
    roleCategory: '',
    aboutCompany: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get logged-in employer from local storage
    const employer = JSON.parse(localStorage.getItem('employer'));

    if (!employer || !employer.name) {
      alert("You must be logged in as an employer to post a job.");
      return;
    }

    // Convert comma-separated string to array
    const skillsArray = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');

    // Set the current date
    const currentDate = new Date().toISOString().split('T')[0];
    const newJob = {
      ...formData,
      postedby: employer.id, // Use employer ID
      employername: employer.name, // Add employer name
      skills: skillsArray,
      dateOfPost: currentDate,
    };

    fetch('http://localhost:3000/mockJobsList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Job created:', data);
        setFormData({
          title: '',
          companyname: '',
          companylogo: '',
          description: '',
          experience: '',
          location: '',
          salary: '',
          rating: '',
          skills: '',
          industryType: '',
          department: '',
          employmentType: '',
          roleCategory: '',
          aboutCompany: ''
        });
        alert("Job posted successfully!");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("An error occurred while posting the job.");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Job Posting</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        {/* ... your form fields ... */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="title" className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="companyname" className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="companyname"
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="companylogo" className="form-label">Company Logo URL</label>
          <input
            type="text"
            className="form-control"
            id="companylogo"
            name="companylogo"
            value={formData.companylogo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Job Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="experience" className="form-label">Experience</label>
            <input
              type="text"
              className="form-control"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="salary" className="form-label">Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="skills" className="form-label">Skills (comma separated)</label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="employmentType" className="form-label">Employment Type</label>
            <input
              type="text"
              className="form-control"
              id="employmentType"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="industryType" className="form-label">Industry Type</label>
          <input
            type="text"
            className="form-control"
            id="industryType"
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="roleCategory" className="form-label">Role Category</label>
          <input
            type="text"
            className="form-control"
            id="roleCategory"
            name="roleCategory"
            value={formData.roleCategory}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="aboutCompany" className="form-label">About Company</label>
          <textarea
            className="form-control"
            id="aboutCompany"
            name="aboutCompany"
            rows="4"
            value={formData.aboutCompany}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateJob;