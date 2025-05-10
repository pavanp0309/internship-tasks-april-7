import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
      <input className="form-control" type="text" placeholder='Name' />
      <br />
      <input className="form-control" type="email" placeholder='Email' />
      <br />
      <textarea className="form-control" placeholder='message'></textarea>
      <br />
      <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
