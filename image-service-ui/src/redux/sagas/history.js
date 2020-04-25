import { takeEvery, put } from 'redux-saga/effects';
import { fetchHistory, addHistory } from '../../api_client/history';
import {
  ADD_TO_HISTORY_ERROR,
  ADD_TO_HISTORY_REQUEST, ADD_TO_HISTORY_SUCCESS,
  FETCH_HISTORY_ERROR,
  FETCH_HISTORY_REQUEST, FETCH_HISTORY_SUCCESS,
} from '../actions/actionTypes'

function* watchFetchHistory() {
  yield takeEvery(FETCH_HISTORY_REQUEST, fetchHistoryWorker);
}

function* fetchHistoryWorker(action) {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    const result = yield fetchHistory(action.payload, headers);
    yield put({ type: FETCH_HISTORY_SUCCESS, payload: result.data.history });
  } catch (error) {
    yield put ({ type: FETCH_HISTORY_ERROR, payload: error.response.data });
  }
}

function* watchAddHistory() {
  yield takeEvery(ADD_TO_HISTORY_REQUEST, addHistoryWorker);
}

function* addHistoryWorker(action) {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    yield addHistory(action.payload, headers);
    yield put({ type: ADD_TO_HISTORY_SUCCESS });
  } catch (error) {
    yield put ({ type: ADD_TO_HISTORY_ERROR, payload: error.response.data });
  }
}

export const historySagas = [watchAddHistory(), watchFetchHistory()];
