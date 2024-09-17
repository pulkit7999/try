// apiServices.js
import axios from 'axios';

const API_URL = 'https://66d8148937b1cadd80534794.mockapi.io/crud-react';
const PWD_URL = 'https://66d8148937b1cadd80534794.mockapi.io/passwords';

export const fetchData = () => {
  return axios.get(API_URL);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const createUser = (name, email) => {
  return axios.post(API_URL, { name, email });
};

export const updateUser = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData);
};

export const signupUser = (userData) => {
  return axios.post(`${PWD_URL}`, userData);
};

export const loginUser = (email, password) => {
  return axios.get(`${PWD_URL}?email=${email}&password=${password}`)
    .then((res) => {
      if (res.data.length > 0) {
        return { token: 'mock-session-token', user: res.data[0] };
      } else {
        throw new Error('Invalid email or password');
      }
    });
};

export const deleteid = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
