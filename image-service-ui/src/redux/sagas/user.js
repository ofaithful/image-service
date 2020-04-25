
import { takeEvery, put } from 'redux-saga/effects';
import { logIn, signUp } from '../../api_client/user';
import jwt from 'jsonwebtoken';
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../actions/actionTypes';

function* watchUserLogin() {
  yield takeEvery(LOGIN_REQUEST, userLoginWorker);
}

function* userLoginWorker(action) {
  try {
    const result = yield logIn(action.payload);
    if (result.data.message) {
      yield put ({ type: LOGIN_ERROR, payload: result.data.message });
    } else {
      localStorage.setItem('token', result.data.token);
      let user = jwt.decode(result.data.token);
      yield put({ type: LOGIN_SUCCESS, payload: user });
    }
  } catch (error) {
    yield put ({ type: LOGIN_ERROR, payload: error.response.data });
  }
}

function* watchUserSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, userSignUpWorker);
}

function* userSignUpWorker(action) {
  try {
    const result = yield signUp(action.payload);
    if (result.data.message) {
      yield put ({ type: SIGN_UP_ERROR, payload: result.data.message });
    } else {
      yield put({ type: SIGN_UP_SUCCESS });
    }
  } catch (error) {
    yield put ({ type: SIGN_UP_ERROR, payload: error.response.data });
  }
}

function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logoutWorker);
}

function* logoutWorker() {
  localStorage.removeItem('token');
  yield put({ type: LOGOUT_SUCCESS })
}

export const userSagas = [watchUserLogin(), watchUserSignUp(), watchLogout()];
