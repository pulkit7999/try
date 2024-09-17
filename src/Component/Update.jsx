import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../Services/apiServices';
import '../Css/Update.css'; 

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = () => {
    updateUser(id, { name, email })
      .then(() => {
        navigate('/read'); 
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="update-container">
      <h2>Update Form</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
