const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend server URL

const ENDPOINTS = {
  projects: `${BASE_URL}/projects`, // Endpoint to manage projects
  clients: `${BASE_URL}/clients`, // Endpoint to manage clients
  contacts: `${BASE_URL}/contacts`, // Endpoint to fetch contact form submissions
  subscribers: `${BASE_URL}/subscribers`, // Endpoint to fetch newsletter subscriptions
};

export default ENDPOINTS;
