import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router'

import Search from './components/search/Search';
import History from './components/history/History';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import { store } from './redux/store';
import { createBrowserHistory } from 'history';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogin = store.getState().userReducer.isLogin;
    console.log('isLogin: ', isLogin);
    return <Route {...rest} render={(props) => (
        isLogin === true
            ? <Component  {...props} />
            : <Redirect to="/sign-in" />
    )} />
}

const routes = () => (
    <Router history={createBrowserHistory()}>
      <Switch>
          <PrivateRoute exact path="/" component={Search} />
          <PrivateRoute path="/history" component={History} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
)

export default routes;