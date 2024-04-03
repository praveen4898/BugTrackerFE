import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      avatarUrl: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://bugtracker-jm8k3ia48-praveenkumars-projects.vercel.app/login', formData);
        const token = response.data.token;
        localStorage.setItem('token', token); 
        navigate('/tracker'); 
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Password:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" type="submit">Login</button>
        </form>
      </div>
    </div>
  );

}

export default Login