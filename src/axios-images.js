import axios from 'axios';

const API_KEY = '9374176-3a06be76718a6096c32dc4b1d';

const instance = axios.create({
  baseURL: `https://pixabay.com/api/?key=${API_KEY}`
});

export default instance;