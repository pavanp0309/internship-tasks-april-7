import React from 'react'


const Card = ({course}) => {
  return (
    <div className='p-4'>
        <div className="card shadow">
    <img src={course.thumbnail} className="card-img-top" alt="" style={{width:"100%",height:"250px"}}/>
  <div className="card-body">
    <h5 className="card-title  text-uppercase">Title: {course.title}</h5>
    <p className="card-text">✏️Instructor : {course.instructor}</p>
    <p className="card-text">📆 Duration: {course.duration} </p>
    <p className="card-text">🎚️Level: {course.level}</p>
    <p className="card-text">⭐Rating : {course.rating}</p>
    <p className="card-text">💸Price : {course.price}</p>
    <p className="card-text">🈹DiscountPrice : {course.discountPrice}</p>
    <p className="card-text">🏷️Tags : {course.tags.join(', ')}</p>
    <p className='text-center'>{course.isEnrolled ? (
      <button className="btn btn-success" disabled>✅Enrolled</button>
  ) : (
    <button className="btn btn-outline-primary" disabled>New Course</button>
  )}
</p>
<p className='text-center'>
  {course.isEnrolled ? (
    <button className="btn btn-success">Continue Course</button>
  ) : (
    <button className="btn btn-primary">Enroll Now</button>
  )}
</p>

    </div>
</div>
    </div>
  )
}

export default Card
