import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_ERROR_CLEAR,
  LOGOUT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  isLogin: false,
  signUpSuccess: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        error: null
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        error: null
      }
    case SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        error: null,
        user: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        user: {},
        error: null
      }
    case AUTH_ERROR_CLEAR:
      return {
        ...state,
        error: null
      }
    default:
      return {
        ...state
      }
  }
}