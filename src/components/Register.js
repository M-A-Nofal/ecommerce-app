import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Register() {

  const navigate = useNavigate();

  const [formStatus, setFormStatus] = useState('Register');

  const onSubmit = (e) => {

    e.preventDefault()

    setFormStatus('Registering...')

    const {firstName, lastName, email, password } = e.target.elements;

    let conFom = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    console.log(conFom);

    navigate('/')
  }

  return (
    <div className='register container mt-5 pt-5'>
      <h3 className='text-center display-6 fw-bolder'>Register</h3>
      <hr />
      <form onSubmit={onSubmit} className='mt-5 container'>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">First name</label>
          <input
            type="text"
            id='firstName'
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">Last name</label>
          <input type="text" id='lastName' className="form-control" placeholder="Last name" required/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email address</label>
          <input
            type="email"
            id='email'
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            id='password'
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-outline-dark">
            {formStatus}
          </button>
        </div>
        <p className="forgot-password text-right mt-3 ">
          Already registered <Link to="/login">Login?</Link>
        </p>
      </form>
    </div>
  )
}

export default Register