import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const request = ({ method, url, data, headers }) => {
  return axios({
    method,
    url,
    data,
    headers
  })
}

export const get = (path, headers) => {
  return request({
    method: 'GET',
    url: BASE_URL + path,
    headers
  });
}


export const post = (path, data, headers) => {
  return request({
    method: 'POST',
    url: BASE_URL + path,
    data,
    headers
  });
}

export const deleteRequest = (path, data, headers) => {
  return request({
    method: 'DELETE',
    url: BASE_URL + path,
    headers,
    data,
  });
};