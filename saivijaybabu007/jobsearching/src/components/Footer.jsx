import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-dark'>
     <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 d-flex justify-content-center">
                {/* Brand Social Media */}
                <div className='d-flex justify-content-center justify-content-md-start'>
                 <div className="icons">
                 <h4 className='text-white'>Job Seeker</h4>
                <p className='text-white'>connect with us  </p>
                 <button className='btn btn-outline-primary mx-1'>
                 <i className="bi bi-facebook"></i>
                 </button>
                 <button className='btn btn-outline-primary'>
                 <i className="bi bi-instagram"></i>
                 </button>
                 <button className='btn btn-outline-primary mx-1'>
                 <i className="bi bi-twitter-x"></i>
                 </button>
                 <button className='btn btn-outline-primary'>
                 <i className="bi bi-github"></i>
                 </button>
                 </div>
                
                </div>
                <div className='mx-4'>
                 <ul className='list-unstyled'>
                    <li className='text-white'>
                        <NavLink className='nav-link' to={'/'}>Home</NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink className='nav-link' to={'/about'}>About</NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink className='nav-link' to={'/joblisting'}>Find a Job</NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink className='nav-link' to={'/contact'}>ContactUs</NavLink>
                    </li>
                 </ul>
                </div>
                <div className='mx-4'>
                    <ul className='list-unstyled'>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Careers</NavLink>
                      </li>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Employer home</NavLink>
                      </li>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Sitemap</NavLink>
                      </li>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Credits</NavLink>
                      </li>
                    </ul>
                </div>
                <div className='mx-4'>
                    <ul className='list-unstyled'>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Help center</NavLink>
                      </li>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Report issue</NavLink>
                      </li>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Privacy policy</NavLink>
                      </li>
                      <li className='text-white'>
                        <NavLink className='nav-link'>Terms & conditions</NavLink>
                      </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-2">
                <div className="card p-3" id='card'>
                    <h4>Apply on the go</h4>
                    <p>Get real-time job updates on our App</p>
                    <div className="buttons d-flex justify-content-center">
                        <button className='btn btn-outline-info mx-2'>Google Play</button>
                        <button className='btn btn-outline-info'>Apple Store</button>
                    </div>
                </div>
            </div>

        </div>

     </div>
    </footer>
  )
}

export default Footer
