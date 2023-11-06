import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoviesListWrapper = styled.ul`
  padding-top: 140px;
  list-style: none;
`;

const MoviesList = ({ films }) => {
  return (
    <MoviesListWrapper> 
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>
            {film.title}
          </Link>
        </li>
      ))}
    </MoviesListWrapper>
  );
};

export default MoviesList;