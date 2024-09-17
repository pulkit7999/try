// src/Components/Read.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, fetchData } from '../Services/apiServices';

import Logout from './Logout';
import '../Css/Read.css'; 
import Update from './Update';

const Read = () => {
  const navigate = useNavigate();
  const [data1, setData] = useState([]);

  const loadData = () => {
    fetchData()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => loadData())
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="read-container">
      <h2 className="mb-4">Data Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to="/update">
                  <button
                    type="button"
                    className="btn btn-primary update-button"
                    onClick={() => setToLocalStorage(item.id, item.name, item.email)}
                  >
                    Update
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-primary delete-button "
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary create-button"
        onClick={() => navigate('/create')}
      >
        Create
      </button>
      
    </div>
  );
};

export default Read;
