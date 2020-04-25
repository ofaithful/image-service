import {ADD_TO_HISTORY_REQUEST, FETCH_HISTORY_REQUEST} from './actionTypes';

export const addToHistory = (userid, query) => ({
  type: ADD_TO_HISTORY_REQUEST,
  payload: {
    userid: userid,
    query: query
  }
});

export const fetchHistory = (userid) => ({
  type: FETCH_HISTORY_REQUEST,
  payload: userid
});
