import {
  FETCH_IMAGES_REQUEST,
  ADD_FAVORITE_REQUEST,
  REMOVE_FAVORITE_REQUEST,
  FETCH_FAVORITES_REQUEST
} from './actionTypes';

export const fetchImages = (query) => ({
  type: FETCH_IMAGES_REQUEST,
  payload: query
});

export const addFavorite = (userid, photoid) => ({
  type: ADD_FAVORITE_REQUEST,
  payload: {
    userid: userid,
    photoid: photoid
  }
});

export const removeFavorite = (userid, photoid) => ({
  type: REMOVE_FAVORITE_REQUEST,
  payload: {
    userid: userid,
    photoid: photoid
  }
});

export const fetchFavorites = (userid) => ({
  type: FETCH_FAVORITES_REQUEST,
  payload: userid
});
