import React from 'react'
import data from './Data/data';

const Card = () => {
  return (
    <div className='container'>
        <div className='row'>
        {data.map((ele)=>{
            return <div className="col-4 col-md-4 col-lg-4 col-sm-4  my-5">
                <div className='card '>
                <div className="col-md-4 d-flex top">
                <h1 className='title fs-2 mx-2'><b></b>{ele.title}</h1>
                      <img src={(`${ele.imgurl}`)} className="card-img-top" alt="..."/>
                </div>
             
            <p className='company mx-2'><b>Company:</b>{ele.company}</p>
            <p className='location mx-2'><b>Location:</b>{ele.location}</p>
            <p className='type mx-2'><b>Type:</b>{ele.type}</p>
            <p className='salaryrange mx-2'><b>SalaryRange:</b>{ele.salaryRange}</p>
            <p className='isBookmarked mx-2'><b>IsBookmarked:</b>{ele.isBookmarked?(<i className="bi bi-bookmark text-blue-500 cursor-pointer"></i>):'not bookmarked'}</p>
            <p className='skillsRequired mx-2'><b>SkillsRequired:</b>{ele.skillsRequired}</p>
            <p className='isHotJob mx-2'><b>IsHotJob:<i class="bi bi-hourglass-split"></i></b>{ele.isHotJob}</p>
            </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Card
