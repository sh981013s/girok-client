import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_API_SERVER;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
