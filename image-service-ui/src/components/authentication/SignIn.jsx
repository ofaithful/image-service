import React, { useState, useEffect } from 'react';
import { Container, Form } from './Styles';
import { Redirect, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { login, authErrorClear } from '../../redux/actions/user';

const mapStateToProps = (state) => ({
  isLogin: state.userReducer.isLogin,
  error: state.userReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => {
    dispatch(login(data));
  },
  authErrorClear: () => {
    dispatch(authErrorClear());
  }
})

const SignIn = ({ logIn, isLogin, error, authErrorClear }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    authErrorClear();
  }, [authErrorClear]);

  if (isLogin) return <Redirect to='/' />

  return (
    <Container>
      <Form>
        {
          error ? <Alert severity="error">{error}</Alert> : null
        }
        <TextField
          label={"Username"}
          placeholder={"Username"}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label={"Password"}
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant={"contained"} color={"primary"} onClick={() => logIn({ username: username, password: password })}>
          Sign In
        </Button>
        <Link to='/sign-up'>
          Don't have an account? Sign Up
        </Link>
      </Form>

    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
