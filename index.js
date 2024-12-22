import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' for React 17 and below
import App from './App'; // Ensure the path and case match your file name
import './style.css'; // Optional: If you have global styles
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for React to render into
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);