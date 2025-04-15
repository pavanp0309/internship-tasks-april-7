import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto mb-4">
                    <h1>Contact</h1>
                    <p><i class="bi bi-envelope"></i>landingpage@gmail.com</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto mb-4">
                    <h1>Follow Us In</h1>
                   <div className='d-flex'>
                    <button className='btn fs-5 text-white'><i class="bi bi-facebook"></i></button>
                    <button className='btn fs-5 text-white'><i class="bi bi-instagram"></i></button>
                    <button className='btn fs-5 text-white'><i class="bi bi-twitter-x"></i></button>
                    <button className='btn fs-5 text-white'><i class="bi bi-linkedin"></i></button>
                   </div>
                    <button className='btn btn-info'>singnup</button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
