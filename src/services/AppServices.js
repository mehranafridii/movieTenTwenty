import {Endpoints} from '../config/Endpoints';
import api from '../constants/Api.constants';
import baseApi, {apiMethods} from './api';

const getUpcomingMoviesQuery = () => {
  return {
    url: `${Endpoints.getUpcomingMovies}?api_key=${api.movieApiKey}`,
    method: apiMethods.get,
  };
};
const getGenre = () => {
  return {
    url: `${Endpoints.getGenre}?api_key=${api.movieApiKey}`,
    method: apiMethods.get,
  };
};
const getMovieByGenre = genreId => {
  return {
    url: `${Endpoints.discoverMovie}?api_key=${api.movieApiKey}&with_genres=${genreId}`,
    method: apiMethods.get,
  };
};
const searchMovie = searchValue => {
  return {
    url: `${Endpoints.searchMovie}?query=${searchValue}&api_key=${api.movieApiKey}`,
    method: apiMethods.get,
  };
};
const getSpecificMovieById = movieId => {
  return {
    url: `movie/${movieId}/videos?api_key=${api.movieApiKey}`,
    method: apiMethods.get,
  };
};
export const AppService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUpcomingMovies: builder.query({
      query: getUpcomingMoviesQuery,
    }),
    getGenre: builder.query({
      query: getGenre,
    }),
    getMovieByGenre: builder.query({
      query: getMovieByGenre,
    }),
    searchMovie: builder.query({
      query: searchMovie,
    }),
    getSpecificMovieById: builder.query({
      query: getSpecificMovieById,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetUpcomingMoviesQuery,
  useLazyGetGenreQuery,
  useLazyGetMovieByGenreQuery,
  useLazySearchMovieQuery,
  useLazyGetSpecificMovieByIdQuery,
} = AppService;
