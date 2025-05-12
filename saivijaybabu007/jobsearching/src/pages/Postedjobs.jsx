import React, { useEffect, useState } from "react";

const Postedjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const employer = JSON.parse(localStorage.getItem("employer"));

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`http://localhost:3000/mockJobsList`);
        const data = await res.json();

        if (employer && employer.id) {
          // Filter jobs based on the logged-in employer's ID
          const employerJobs = data.filter((job) => job.postedby === employer.id);
          setJobs(employerJobs);
        } else {
          setJobs([]); // No employer logged in, show no jobs
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [employer?.id]); // Re-fetch when employer ID changes

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Posted Jobs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs posted by you yet.</p>
      ) : (
        <div className="list-group">
          {jobs.map((job) => (
            <div key={job.id} className="list-group-item">
              <h5>{job.title}</h5>
              <p>{job.companyname}</p>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              {/* You can display other job details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Postedjobs;