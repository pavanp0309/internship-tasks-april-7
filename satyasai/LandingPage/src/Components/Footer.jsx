import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-white pt-5 pb-4'>
        <div className='container-fluid text-center text-md-start'>
            <div className='row'>
                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold text-warning'>Contact</h6>
                    <p><i className='bi bi-envelope me-2'>info@features</i></p>
                </div>

                {/* Social media*/}
                <div>
                    <h6 className='text-uppercase fw-bold text-warning'>Follow US</h6>
                    <a href="#" className='text-white me-3 fs-5'><i className='bi bi-facebook'></i></a>
                    <a href="#" className='text-white me-3 fs-5'><i className='bi bi-twitter'></i></a>
                    <a href="#" className='text-white me-3 fs-5'><i className='bi bi-instagram'></i></a>
                    <a href="#" className='text-white me-3 fs-5'><i className='bi bi-linkedin'></i></a>

                    <div className='my-2'>
                        <button className='btn btn-secondary'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
