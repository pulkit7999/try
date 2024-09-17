
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Services/apiServices';
import '../Css/Login.css'; 
import { useAuth } from './AuthContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(email, password)
      .then((res) => {
        login(res.token, res.user);
        navigate('/read'); 
      })
      .catch((error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password');
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
