import axios from 'axios';

const server = 'http://192.168.120.25:8082/_/';

const getData = response => response.data;

const instance = axios.create({
  baseURL: server,
  headers: { 'Content-Type': 'application/json' },
});

const service = {
  getInfo: () => instance.get().then(getData),
  getItems: (type, params=[]) => instance.get(`items/${type.toLowerCase()}?${params.join('&')}`).then(getData),
}

export default service;
