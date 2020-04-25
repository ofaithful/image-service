import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Form } from './Styles';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { signUp, authErrorClear } from '../../redux/actions/user';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  error: state.userReducer.error,
  signUpSuccess: state.userReducer.signUpSuccess
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => {
    dispatch(signUp(data));
  },
  authErrorClear: () => {
    dispatch(authErrorClear());
  }
})

const SignUp = ({ error, signUp, signUpSuccess, authErrorClear }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    authErrorClear();
  }, [authErrorClear]);

  if (signUpSuccess) return <Redirect to='/sign-in' />

  return (
    <Container>
      <Form>
        {
          error ? <Alert severity="warning">{error}</Alert> : null
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
        <Button variant={"contained"} color={"primary"} onClick={() => signUp({ username, password })}>
          Sign Up
        </Button>
        <Link to='/sign-in'>
          Already have an account? Sign in
        </Link>
      </Form>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
