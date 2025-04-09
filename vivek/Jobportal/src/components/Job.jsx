import React from 'react'
import data from './data/jobs'

const job = () => {
    return (
      <div className='job-portal-container'>
        <h1 className='portal-title'>JOB MELA</h1>
        <div className="job-grid">
          {data.map((job) => (
            <div key={job.id}>
              <div className="card-header">
                <img className='company-logo' src={job.imgurl} alt={job.company} />
                <span className='hot-badge'>{job.hotjob?'🔥HOTJOB':''}</span>
                <span className='bookmark-icon'>🔖:bookmark</span>
              </div>
              <div className='card-body'>
                <h3 className="job-title">{job.title}</h3>
                <p className="company-name">{job.company}</p>
                
                <div className="job-meta">
                  <span className="location">📍 {job.location}</span>
                  <span className="salary">💰 {job.salaryRange}</span>
                </div>
                
                <div className="job-details">
                  <p><strong>Type:</strong> {job.type}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Posted:</strong> {job.postedDate}</p>
                </div>
                
                <div className="skills-container">
                  <span className='skill-tag'>{job.skillsrequired}</span>
                </div>
                
                <button className='btn '>Applynow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default job;