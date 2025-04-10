import React from 'react'

const Card = ({jobs}) => {
  return (
    <div className='p-4 justify-content-center'>
        <div className='col-md-4'>
            <div className="card shadow-sm border-0 rounded-3">
                <div className="card" style={{width: "18rem", height: "auto"}}>
                    <img src={jobs.thumbnail} className="card-img-top"/>
                    <h5 className="card-title">{jobs.title}</h5>
                    <p className="card-text">{jobs.company}</p>
                    <p className="card-text">{jobs.location}</p>
                    <p className="card-text">{jobs.type}</p>
                    <p className="card-text">{jobs.salaryRange}</p>
                    <p className="card-text">{jobs.postedDate}</p>
                    <p className="card-text">{jobs.skillsRequired}</p>
                    <p className="card-text">{jobs.isBookmarked ? "⭐ Bookmarked" : ""}</p>
                    <p className="card-text">{jobs.isHotJob ? "🔥 Hot Job" : ""}</p>
                    <button className='btn btn-primary'>Apply Now</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Card
