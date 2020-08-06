import axios from 'axios';

const api = axios.create({
  // localhost back-end, endereço base
  baseURL: 'http://localhost:3333'
});

export default api;