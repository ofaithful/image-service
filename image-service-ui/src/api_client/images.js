import { get, post, deleteRequest, request } from './base';

const getImages = (query) => {
  return request({
    method: 'GET',
    url: `https://api.unsplash.com/search/photos?query=${query}`,
    headers: {
      Authorization: 'Client-ID v_nZi7fHei1j9MjHg3XXYP0t7yISqpCI7Ths7P7ZzW4'
    }
  });
}

export const fetchImages = (query) => {
  return getImages(query);
}

export const fetchFavorites = (id, headers) => {
  return get(`/favorites/${id}`, headers);
}

export const addFavorite = (data, headers) => {
  return post('/favorites', data, headers);
}

export const removeFavorite = (data, headers) => {
  return deleteRequest('/favorites', data, headers)
}
