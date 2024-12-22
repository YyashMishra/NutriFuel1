import axios from 'axios';

// Create an Axios instance with a base URL to simplify requests.
const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // Update this URL to match your backend
});

export default API;
