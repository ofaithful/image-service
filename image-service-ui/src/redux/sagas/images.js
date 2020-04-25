import { takeEvery, put } from 'redux-saga/effects';
import { fetchImages, fetchFavorites, addFavorite, removeFavorite } from '../../api_client/images';
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST, ADD_FAVORITE_SUCCESS, FETCH_FAVORITES_ERROR, FETCH_FAVORITES_REQUEST, FETCH_FAVORITES_SUCCESS,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS, REMOVE_FAVORITE_ERROR, REMOVE_FAVORITE_REQUEST, REMOVE_FAVORITE_SUCCESS
} from '../actions/actionTypes';

function* watchFetchImages() {
  yield takeEvery(FETCH_IMAGES_REQUEST, fetchImagesWorker);
}

function* fetchImagesWorker(action) {
  try {
    const result = yield fetchImages(action.payload);
    yield put({ type: FETCH_IMAGES_SUCCESS, payload: result.data.results });
  } catch (error) {
    yield put ({ type: FETCH_IMAGES_ERROR, payload: error });
  }
}

function* watchAddFavorite() {
  yield takeEvery(ADD_FAVORITE_REQUEST, addFavoriteWorker);
}

function* addFavoriteWorker(action) {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    const result = yield addFavorite(action.payload, headers);
    yield put({ type: ADD_FAVORITE_SUCCESS, payload: result.data.addedToFavorites });
  } catch (error) {
    yield put ({ type: ADD_FAVORITE_ERROR, payload: error });
  }
}

function* watchRemoveFavorite() {
  yield takeEvery(REMOVE_FAVORITE_REQUEST, removeFavoriteWorker);
}

function* removeFavoriteWorker(action) {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    const result = yield removeFavorite(action.payload, headers);
    console.log(result)
    yield put({ type: REMOVE_FAVORITE_SUCCESS, payload: result.data.removedFromFavorites });
  } catch (error) {
    yield put ({ type: REMOVE_FAVORITE_ERROR, payload: error });
  }
}


function* watchFetchFavorites() {
  yield takeEvery(FETCH_FAVORITES_REQUEST, fetchFavoritesWorker);
}

function* fetchFavoritesWorker(action) {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    let result = yield fetchFavorites(action.payload, headers);
    yield put({ type: FETCH_FAVORITES_SUCCESS, payload: result.data.favorites });
  } catch (error) {
    yield put ({ type: FETCH_FAVORITES_ERROR, payload: error });
  }
}

export const imagesSagas = [
  watchFetchImages(),
  watchAddFavorite(),
  watchFetchFavorites(),
  watchRemoveFavorite()
];
