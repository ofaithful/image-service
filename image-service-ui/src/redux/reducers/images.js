import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_ERROR,
  REMOVE_FAVORITE_REQUEST,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_ERROR,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR
} from '../actions/actionTypes';
import { clone } from 'lodash';

const initialState = {
  images: [],
  favorites: [],
  isLoading: false,
  error: null
}

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.payload
      }
    case FETCH_IMAGES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_FAVORITE_REQUEST:
      return {
        ...state,
        error: null
      }
    case ADD_FAVORITE_SUCCESS: {
      let favorites = clone(state.favorites);
      favorites.push(action.payload);
      return {
        ...state,
        favorites: favorites
      }
    }
    case ADD_FAVORITE_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case REMOVE_FAVORITE_REQUEST:
      return {
        ...state,
        error: null
      }
    case REMOVE_FAVORITE_SUCCESS: {
      const currentFavorites = clone(state.favorites);
      const updatedFavorites = currentFavorites.filter((favorite) => favorite !== action.payload);
      return {
        ...state,
        favorites: updatedFavorites
      }
    }
    case REMOVE_FAVORITE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        error: null
      }
    case FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
      }
    case FETCH_FAVORITES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
}