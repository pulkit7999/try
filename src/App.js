import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Component/PrivateRoute';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Read from './Component/Read';
import Create from './Component/Create';
import Update from './Component/Update';
import NavBar from './Component/NavBar';
import { AuthProvider } from './Component/AuthContext';

function App() {
  return (
    <AuthProvider>
      <NavBar /> 
      <div className="container mt-5 pt-5"> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/read" element={<PrivateRoute element={<Read />} />} />
          <Route path="/update" element={<PrivateRoute element={<Update />} />} />
          <Route path="/create" element={<PrivateRoute element={<Create />} />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
