import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import the CSS file for styling

export default function Login() {
  const [formData, setFormData]= useState({email:'',password:''});//state to manage inputs
  const [message, setMessage]= useState('');
  const navigate = useNavigate(); // navigate to other pages
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update state on input change
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData); // Send login request
      setMessage(response.data.message); // Display success message
      localStorage.setItem('token', response.data.token); // Save token to local storage
      setTimeout(() => navigate('/'), 2000); // Redirect to homepage after 2 seconds
    } catch (error) {
      setMessage(error.response?.data?.error || 'Login failed. Try again!'); // Display error message
    }
  };



  return (
    <div className='login'>
      <div className='login-container'>
         {/* Display feedback message */}
         {message && <p className="message">{message}</p>}
        <h3>Login</h3>
        <form action="/">
          <input 
            type="email" 
            name='email' 
            placeholder="Email" 
            className="login-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="password" 
            name='password' 
            placeholder="Password" 
            className="login-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>
          Don't have an account?  <Link to="/Signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
