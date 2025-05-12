import React, { useState } from 'react'

const Contact = () => {
  const [fullname, setFullname] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const HandleInput = (e, name) => {
    if (name === fullname) {
      setFullname(e.target.value)
    } else if (name === number) {
      setNumber(e.target.value)
    } else if (name === email) {
      setEmail(e.target.value)
    }else if(name === comment){
      setComment(e.target.value)
    }
  }
  const HandleSubmit = () => {
    e.preventDefault();
    let useform = [{
      fullname: fullname,
      number: number,
      email: email
    }]
    console.log(useform);
  }
  return (
    <>
      <img src="/src/assets/contactbanner.webp" alt="" className='contact-img' />
      <div className='container'>
        <div className="row">
        <div className="container py-5" id='container'>
      <div className="row">
        {/* Left side: Info */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">
            Email, call, or complete the form to learn how our team can help solve your hiring needs.
          </p>
          <p><strong>Email:</strong> info@jobportal.com</p>
          <p><strong>Phone:</strong> 321-221-231</p>
          <p><a href="#support" className="text-decoration-underline">Customer Support</a></p>

          <div className="mt-4">
            <h6><strong>Customer Support</strong></h6>
            <p>We're here 24/7 to help with any job-related queries.</p>

            <h6><strong>Feedback & Suggestions</strong></h6>
            <p>Your input helps us improve the portal experience.</p>

            <h6><strong>Media Inquiries</strong></h6>
            <p>Contact media@jobportal.com for press-related queries.</p>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Get in Touch</h3>
          <p className="text-muted">You can reach us anytime</p>

          <form onSubmit={HandleSubmit}>
            
              <div className="mb-3">
                <input type="text" name='fullname' className="form-control" placeholder="First name" value={fullname} onChange={(e)=>HandleInput(e,'fullname')}/>
              </div>
              
            <div className="mb-3">
              <input type="email" name='email' className="form-control" placeholder="Your email" value={email} onChange={(e)=>HandleInput(e,'email')}/>
            </div>

            <div className="mb-3 d-flex">
              <input type="tel" name='number' className="form-control" placeholder="Phone number" value={number} onChange={(e)=>HandleInput(e,'number')}/>
            </div>

            <div className="mb-3">
              <textarea className="form-control" name='comment' rows="4" placeholder="How can we help?" value={comment} onChange={(e)=>HandleInput(e,'comment')}></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
            
          </form>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default Contact
