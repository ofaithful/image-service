import {SIGN_UP_REQUEST, LOGIN_REQUEST, AUTH_ERROR_CLEAR, LOGOUT_REQUEST} from './actionTypes';

export const signUp = (userData) => ({
  type: SIGN_UP_REQUEST,
  payload: userData
});

export const login = (userData) => ({
  type: LOGIN_REQUEST,
  payload: userData
});

export const logout = () => ({
  type: LOGOUT_REQUEST
});

export const authErrorClear = () => ({
  type: AUTH_ERROR_CLEAR
});
