import {
  ADD_TO_HISTORY_REQUEST,
  ADD_TO_HISTORY_ERROR,
  ADD_TO_HISTORY_SUCCESS,
  FETCH_HISTORY_SUCCESS, FETCH_HISTORY_REQUEST, FETCH_HISTORY_ERROR
} from '../actions/actionTypes';
import { sortBy, reverse } from 'lodash';

const initialState = {
  searchedValues: [],
  isLoading: false,
  error: null
}

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case ADD_TO_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      }
    case ADD_TO_HISTORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case FETCH_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchedValues: reverse(sortBy(action.payload, 'date'))
      }
    case FETCH_HISTORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
