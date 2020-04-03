const axios = require('axios');

const state = { baseUrl: 'https://jsonplaceholder.typicode.com/' };

const AxiosClient = axios.create({
  baseURL: state.baseUrl,
  responseType: 'json',
});

module.exports = AxiosClient;
