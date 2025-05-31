import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../api/rapidapi';

const JobFilters = ({
  selectedCategories = [],
  setSelectedCategories,
  selectedLocations = [],
  setSelectedLocations,
  selectedSalaryRange = [0, 200000],
  setSelectedSalaryRange,
}) => {
  const [jobs, setJobs] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const jobData = await fetchJobs();
      setJobs(jobData);

      const uniqueLocations = [...new Set(jobData.map((job) => job.location))];
      setLocations(uniqueLocations);
    }

    loadJobs();
  }, []);

  const countJobsForCategory = (category) => {
    return jobs.filter((job) => job.category === category).length;
  };

  const countJobsForLocation = (location) => {
    return jobs.filter((job) => job.location === location).length;
  };

  const countJobsForSalary = (minSalary, maxSalary) => {
    return jobs.filter((job) => {
      const salary = parseInt(job.salary, 10);
      return salary >= minSalary && salary <= maxSalary;
    }).length;
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    if (e.target.checked) {
      setSelectedLocations((prev) => [...prev, location]);
    } else {
      setSelectedLocations((prev) => prev.filter((loc) => loc !== location));
    }
  };

  const handleSalaryChange = (e) => {
    const [minSalary, maxSalary] = e.target.value.split("-").map(Number);
    setSelectedSalaryRange([minSalary, maxSalary]);
  };

  return (
    <div className="p-3 bg-white rounded shadow-sm" style={{ position: "sticky"}}>
      <h5 className="mb-3">Filter by Category</h5>
      {["Development", "Design", "Management", "Operations", "Data Science", "Quality Assurance"].map((cat, idx) => (
        <div className="form-check" key={idx}>
          <input
            className="form-check-input"
            type="checkbox"
            name="category"
            id={`cat-${idx}`}
            value={cat}
            checked={selectedCategories.includes(cat)}
            onChange={handleCategoryChange}
          />
          <label className="form-check-label" htmlFor={`cat-${idx}`}>
            {cat} ({countJobsForCategory(cat)})
          </label>
        </div>
      ))}

      <h5 className="mt-4 mb-3">Filter by Location</h5>
      {locations.map((location, idx) => (
        <div className="form-check" key={idx}>
          <input
            className="form-check-input"
            type="checkbox"
            name="location"
            id={`loc-${idx}`}
            value={location}
            checked={selectedLocations.includes(location)}
            onChange={handleLocationChange}
          />
          <label className="form-check-label" htmlFor={`loc-${idx}`}>
            {location} ({countJobsForLocation(location)})
          </label>
        </div>
      ))}

      <h5 className="mt-4 mb-3">Filter by Salary</h5>
      {[
        { label: "$0 - $50,000", value: "0-50000" },
        { label: "$50,000 - $100,000", value: "50000-100000" },
        { label: "$100,000 - $150,000", value: "100000-150000" },
        { label: "$150,000 - $200,000", value: "150000-200000" },
      ].map((range, idx) => (
        <div className="form-check" key={idx}>
          <input
            className="form-check-input"
            type="radio"
            name="salary"
            id={`salary-${idx}`}
            value={range.value}
            checked={selectedSalaryRange.join("-") === range.value}
            onChange={handleSalaryChange}
          />
          <label className="form-check-label" htmlFor={`salary-${idx}`}>
            {range.label} ({countJobsForSalary(...range.value.split("-").map(Number))})
          </label>
        </div>
      ))}

      <div className="mt-3">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => {
            setSelectedCategories([]);
            setSelectedLocations([]);
            setSelectedSalaryRange([0, 200000]);
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default JobFilters;
