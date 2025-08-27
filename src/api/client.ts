import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.1.7:8989',
});

export default client;
