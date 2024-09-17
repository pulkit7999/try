import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Services/apiServices';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      createUser(name, email)
        .then(() => {
          navigate('/read');
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow-lg" style={{ width: '500px' }}>
        <h2 className='mt-3 text-center'>Create Entry</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${nameError ? 'is-invalid' : ''}`}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            {nameError && <div className="invalid-feedback">{nameError}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${emailError ? 'is-invalid' : ''}`}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-describedby="emailHelp"
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block w-100"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
