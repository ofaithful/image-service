import React  from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './styles';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/user';

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  }
});

const Header = ({ logout }) => {

  return (
    <HeaderWrapper>
      <div>
        <Button>
          <Link to='/'>Search</Link>
        </Button>
        <Button>
          <Link to='/history'>History</Link>
        </Button>
      </div>
      <Button onClick={() => logout()}>Logout</Button>
    </HeaderWrapper>
  );
};

export default connect(null, mapDispatchToProps)(Header);
