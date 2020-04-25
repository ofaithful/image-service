import React, { useEffect } from 'react';
import Header from '../header/Header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { fetchHistory } from '../../redux/actions/history';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

const mapStateToProps = (state) => ({
  searchedValues: state.historyReducer.searchedValues,
  user: state.userReducer.user.user,
  isLogin: state.userReducer.isLogin
});

const mapDispatchToProps = (dispatch) => ({
  fetchHistory: (userid) => {
    dispatch(fetchHistory(userid));
  }
});

const History = ({ searchedValues, user, isLogin, fetchHistory }) => {

  useEffect(() => {
    if (isLogin) {
      fetchHistory(user._id);
    }
  }, [user, isLogin, fetchHistory]);

  if (!isLogin) return <Redirect to='/sign-in' />

  return (
    <>
      <Header />
      <List>
        {
          searchedValues.map((query) => <ListItem button key={query._id}>
            <ListItemText primary={query.query}/>
            <div>
              <ListItemText secondary={new Date(query.date).toLocaleString()} />
            </div>
          </ListItem> )
        }
      </List>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
