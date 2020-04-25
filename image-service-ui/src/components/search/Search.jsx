import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import { Input, Button } from '@material-ui/core';
import { Image } from './styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { addFavorite, fetchFavorites, fetchImages, removeFavorite } from '../../redux/actions/images';
import { connect } from 'react-redux';
import { addToHistory } from '../../redux/actions/history';
import {Redirect} from 'react-router'

const mapStateToProps = (state) => ({
  images: state.imagesReducer.images,
  favorites: state.imagesReducer.favorites,
  error: state.imagesReducer.error,
  isLoading: state.imagesReducer.isLoading,
  user: state.userReducer.user.user,
  isLogin: state.userReducer.isLogin
});

const mapDispatchToProps = (dispatch) => ({
  fetchImages: (query) => {
    dispatch(fetchImages(query));
  },
  fetchFavorites: (userid) => {
    dispatch(fetchFavorites(userid));
  },
  addFavorite: (userid, photoid) => {
    dispatch(addFavorite(userid, photoid));
  },
  removeFavorite: (userid, photoid) => {
    dispatch(removeFavorite(userid, photoid));
  },
  addHistory: (userid, query) => {
    dispatch(addToHistory(userid, query));
  }
});


const Search = ({
  images,
  favorites,
  error,
  isLoading,
  fetchImages,
  fetchFavorites,
  addFavorite,
  removeFavorite,
  addHistory,
  user,
  isLogin
}) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (isLogin) {
      fetchFavorites(user._id);
    }
  }, [user, isLogin, fetchFavorites]);

  const getImages = () => {
    fetchImages(searchValue);
    addHistory(user._id, searchValue);
  };

  const handleLike = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(user._id, id);
    } else {
      addFavorite(user._id, id);
    }
  }

  if (!isLogin) return <Redirect to='/' />

  return (
    <>
      <Header />
      <Container>
        <Grid container justify='center'>
          <Input
            type='text'
            variant="outlined"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Button onClick={getImages}><SearchIcon /></Button>
        </Grid>
      <Grid container spacing={3} alignItems="center">
        {images.length > 0
          ? images.map((img) => {
            return (
              <Grid item xs={4} key={img.id}>
                <Image src={img.urls.small} />
                <Button onClick={() => handleLike(img.id)}>
                  {
                    favorites.includes(img.id) ? <FavoriteIcon /> :
                      <FavoriteBorderIcon />
                  }
                </Button>
              </Grid>
            )
          })
          : null
        }
        </Grid>
      </Container>

    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
