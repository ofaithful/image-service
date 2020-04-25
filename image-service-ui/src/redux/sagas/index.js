import { all } from 'redux-saga/effects';
import { imagesSagas } from './images';
import { userSagas } from './user';
import { historySagas } from './history';

export default function* rootSaga() {
  yield all([...imagesSagas, ...userSagas, ...historySagas]);
}
