import { combineReducers } from 'redux';
import userReducer from './user';
import imagesReducer from './images';
import historyReducer from './history';

export default combineReducers({
  userReducer,
  historyReducer,
  imagesReducer
})