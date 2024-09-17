// src/Components/Signup.jsx
import React, { useState } from 'react';
import { signupUser } from '../Services/apiServices';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  
  const handleSignup = () => {
    signupUser({ name, email, password })
      .then(() => {
        // Automatically log in after successful signup
        login('mock-session-token', { name, email }); // Adjust token and user data as needed
      })
      .catch((error) => {
        console.error('Signup failed:', error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100 mt-3"
            onClick={handleSignup}>
            Signup
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
