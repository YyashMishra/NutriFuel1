import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './style.css'; // Ensure your CSS file is properly linked

export default function Navbar() {
  // Check if the user is authenticated (based on the presence of a token in localStorage)
  const isAuthenticated = !!localStorage.getItem('token');

  // Logout handler to remove the token and redirect
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    alert('You have been logged out successfully!');
    window.location.reload(); // Refresh the page to reflect the changes
  };

  return (
    <nav className="nav">
      {/* Main logo link */}
      <Link to="/" className="NutriFuel">NutriFuel</Link>

      {/* Links to various categories */}
      <ul>
        <li><Link to="/wheyprotein">Whey Protein</Link></li>
        <li><Link to="/bcaa">BCAA</Link></li>
        <li><Link to="/creatine">Creatine</Link></li>
        <li><Link to="/vitamins">Vitamins</Link></li>
      </ul>

      {/* Authentication links */}
      <ul>
        {!isAuthenticated ? (
          // Show Login and Signup links if not authenticated
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          // Show Logout link if authenticated
          <li>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
