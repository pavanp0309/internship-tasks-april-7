import React from 'react'
import data from './data/Data'

const Card = () => {
  return (
   
    <div>
        <h1 className='head text-center'>TODAY JOB LIST</h1>
        <div className="container">
    <div className="row">
        {data.map((ele)=>(
        <div key={ele.id} className="col-12 col-sm-12 col-md-6 col-lg-6">
       <div className="card  my-2 p-3">
       <span className=''><b>Hot:</b>{ele. isjobhot?(<i class="bi bi-hourglass-split"></i>):'normal'}</span>
       <div className='top' id='top'>
       <h2 className='title'>{ele.title}</h2>
       <img src={(`${ele.imgurl}`)} className="img-fluid rounded-circle mx-3" id='img-fluid'/>
       </div>
        <p><span className='text'><b>Company:</b>{ele.company}</span> | <span className='text'><b>Location:</b>{ele.location}</span></p>
        <p><span className='text'><b>Type:</b>{ele.type}</span> | <span className='text'><b>Experience:</b>{ele.experience}</span></p>
        <p className='text'><b>SalaryRange:</b>{ele.salaryRange}</p>
        <p className='text'><b>PostedDate:</b>{ele.postedDate}</p>
        <span className='text'><b>RequiredSkills:</b>{ele.skillsrequired}</span>
        <p className='text'>{ele.isBookmarked?(<i className="bi bi-bookmark text-blue-500 cursor-pointer"></i>) :'not bookmark'}<b>:Bookmark</b></p>
       </div>
        </div>
    ))}
        </div>
    </div>
    </div>
   
  )
}

export default Card
