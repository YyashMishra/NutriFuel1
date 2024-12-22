import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Card from './Card';
import Login from './Login';
import Footer from './Footer';
import './style.css';
import Signup from './Signup';
import './App.css';
import WheyProtein from './Wheyprotein';
import Bcaa from './Bcaa';
import Vitamins from './Vitamins';
import Creatine from './Creatine';
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if the user is authenticated on page load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // If token exists, the user is authenticated
    }
  }, []);

  // Handle login by setting the token in localStorage and update auth state
  const handleLogin = (token) => {
    localStorage.setItem('token', token); // Save the token in localStorage
    setIsAuthenticated(true); // Set auth state to true
    navigate('/'); // Redirect to homepage after login
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    setIsAuthenticated(false); // Set auth state to false
    navigate('/login'); // Redirect to login page
  };

  return (
    <BrowserRouter>
      <div>
        {/* Navbar will always be rendered */}
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

        {/* Define routes */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Card />} />
          {/* Login route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* Signup route */}
          <Route path="/signup" element={<Signup />} />
          {/* Protected routes (only accessible when authenticated) */}
          <Route path="/wheyprotein" element={isAuthenticated ? <WheyProtein /> : <Login />} />
          <Route path="/bcaa" element={isAuthenticated ? <Bcaa /> : <Login />} />
          <Route path="/vitamins" element={isAuthenticated ? <Vitamins /> : <Login />} />
          <Route path="/creatine" element={isAuthenticated ? <Creatine /> : <Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
