import { get, post } from './base';

export const fetchHistory = (id, headers) => {
  return get(`/history/${id}`, headers);
}

export const addHistory = (data, headers) => {
  return post('/history', data, headers)
}