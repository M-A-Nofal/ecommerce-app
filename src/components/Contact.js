import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {


  const [formStatus, setFormStatus] = useState('Send');

  const onSubmit = (e) => {

    e.preventDefault()

    setFormStatus('Submitting...')

    const { name, email, message } = e.target.elements;

    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(conFom);

  }


  return (
    <>
      <div className="contact container mt-5 pt-5">
        <h3 className='text-center display-6 fw-bolder'>Contact Us</h3>
        <hr />
        <form onSubmit={onSubmit} className='mt-5 container'>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-outline-dark" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact;


