import React from 'react';
import Routes from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './redux/actions/actionTypes';
import jwt from 'jsonwebtoken';

const token = localStorage.getItem('token');

if (token) {
  axios.get('http://localhost:8000/verify-token', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    if (res.status !== 200) {
      store.dispatch({ type: LOGOUT_SUCCESS });
    } else {
      const user = jwt.decode(token);
      store.dispatch({type: LOGIN_SUCCESS, payload: user });
    }
  }).catch(err => store.dispatch({ type: LOGOUT_SUCCESS }));
}

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
