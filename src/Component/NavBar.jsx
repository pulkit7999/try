import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const Header = () => {
  const { logout } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/login'); 
  };

  const handleSignup = () => {
    navigate('/'); 
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
  };

  return (
    <header className="p-3 bg-dark text-white fixed-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Logo">
              <use xlinkHref="#logo" />
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
            <li><Link to="/read" className="nav-link px-2 text-white">List</Link></li>
            <li><Link to="/create" className="nav-link px-2 text-white">Create</Link></li>
          </ul>

          

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2" onClick={handleLogin}>Login</button>
            <button type="button" className="btn btn-warning me-2" onClick={handleSignup}>Sign-up</button>
            <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
