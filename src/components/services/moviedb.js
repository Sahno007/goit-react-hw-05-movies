const API_KEY = '7e458b491a16bc45ebacdd0b519bec7c';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieByName = value => {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${value}`);
};

export const fetchMovieById = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
};

export const fetchForActors = id => {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
};

export const fetchToReviews = id => {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
};