// api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update with your backend URL

// Function to fetch bus data
export const fetchTerms = async () => {
  try {
    const response = await axios.get(`${API_URL}/terms`); // Adjust the endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching terms:', error);
    throw error;
  }
};

// Function to add a new term (if needed)
export const addTerm = async (term) => {
  try {
    const response = await axios.post(`${API_URL}/terms`, { term });
    return response.data;
  } catch (error) {
    console.error('Error adding term:', error);
    throw error;
  }
};
