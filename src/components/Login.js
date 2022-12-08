import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const [formStatus, setFormStatus] = useState('Submit');

  const onSubmit = (e) => {

    e.preventDefault()

    setFormStatus('Submitting...')

    const { email, password } = e.target.elements;

    let conFom = {
      email: email.value,
      password: password.value,
    };

    console.log(conFom);

    navigate('/')
  }

  return (
    <div className='login container mt-5 pt-5 '>
      <h3 className='text-center display-6 fw-bolder'>Login</h3>
      <hr />
      <form onSubmit={onSubmit} className='mt-5 container'>
      <div className="text-center mb-2">
              Not registered yet?
              <Link to='/register'>
              <span className="link-primary">
              Register
              </span>
              </Link>
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-outline-dark">
            {formStatus}
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <Link to='/'>password?</Link>
        </p>
      </form>
    </div>
  )
}

export default Login