import axios from 'axios';

const server = 'http://192.168.120.25:8082/_/';

const getData = response => response.data;

const instance = axios.create({
  baseURL: server,
  headers: { 'Content-Type': 'application/json' },
});

export default { instance, getData };
