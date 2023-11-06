import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'components/services/moviedb';
import { MovieDetalisStyle } from './MovieDetalisStyle.styled';
import { MovieDetalisContainerStyle } from './MovieDetalisContainerStyle.styled';
import { MovieDetalisMoreInfoLinks } from './MovieDetalisMoreInfoLinks.styled';

const MovieDetails = () => {
  const params = useParams();
  const [film, setFilmId] = useState(null);
  const location = useLocation();
  const [lastPage, setLastPage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (
      location.pathname.includes('cast') ||
      location.pathname.includes('reviews')
    ) {
      return;
    }
    if (location.state && location.state.from) {
      setLastPage(location.state.from);
    } else {
      setLastPage('/');
    }
  }, [location]);

  useEffect(() => {
    setError('');
    fetchMovieById(params.movieId)
      .then(resp => {
        if (!resp.ok) {
          setError('Sorry, something went wrong');
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then(data => {
        if (Object.keys(data).length === 0) {
          setError("Sorry, we don't know this film ");
          throw new Error('Film data not found');
        }

        setFilmId(data);
      })
      .catch(err => console.error(err));
  }, [params.movieId]);

  return (
    <MovieDetalisContainerStyle>
      <Link to={error ? '/' : lastPage}>Go back</Link>
      {error && <h3>{error}</h3>}
      {film && (
        <MovieDetalisStyle>
          <img
            src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
            alt={film.title}
          />
          <div>
            <h2>
              {film.title} ({Number.parseInt(film.release_date)})
            </h2>
            <p>User score: {Math.round(film.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <p>{film.genres?.map(genre => genre.name).join(', ')}</p>
          </div>
          <div></div>
        </MovieDetalisStyle>
      )}
      {!error && (
        <MovieDetalisMoreInfoLinks>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </MovieDetalisMoreInfoLinks>
      )}
      <Outlet />
    </MovieDetalisContainerStyle>
  );
};

export default MovieDetails;
