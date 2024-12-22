import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import axios from 'axios';



export default function Signup(){

  const [formData, setFormData] = React.useState({   //State to manage form input
    username: '',
    email: '',
    password: '',
  })

  const [message, setMessage] = React.useState(''); //State to manage message display
  const navigate = useNavigate();  //userNavigate for redirection
  const handleChange = (e) => {    //Handle input change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {  //Handle form submission
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      setMessage(response.data.message); // Show success message
      setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
    } catch (error) {
      setMessage(error.response?.data?.error || 'Signup failed. Try again!'); // Show error message
    }
  };


    return (
    <div className='signup'>
      <div className='signup-container'>
        {/* Show feedback message */}
        {message && <p className="message">{message}</p>}
        <h3>Signup</h3>
        <form onSubmit={handleSubmit}>
          <input type="username" name="username" placeholder="Username" className="login-input"  value={formData.username} onChange={handleChange} required />
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
            placeholder="Create Password" 
            className="login-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    )
}