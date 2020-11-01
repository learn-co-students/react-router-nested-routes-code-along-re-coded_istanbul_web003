import MovieShow from '../components/MovieShow';
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)

export default MoviesPage
