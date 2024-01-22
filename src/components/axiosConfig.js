import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://43.201.237.33:8080/',
});


export default instance;