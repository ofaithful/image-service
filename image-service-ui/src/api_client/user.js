import { post } from './base';

export function signUp(data) {
  return post('/users', data);
};

export function logIn(data) {
  return post('/login', data);
};
