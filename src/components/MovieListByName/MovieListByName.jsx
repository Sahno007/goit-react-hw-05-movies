import { Link, useLocation } from 'react-router-dom';
import { MovieListStyle } from './MovieListStyle.styled';
import PropTypes from 'prop-types';

const MovieListByName = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListStyle>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={`${location.pathname}${location.search}`}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </MovieListStyle>
  );
};

export default MovieListByName;

MovieListByName.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// import { Link, useLocation } from 'react-router-dom';
// import { MovieListStyle } from './MovieListStyle.styled';
// import PropTypes from 'prop-types';

// const MovieListByName = ({ movies }) => {
//   return (
//     <MovieListStyle>
//       {movies.map(movie => (
//         <li key={movie.id}>
//           <Link
//             to={`/movies/${movie.id}`}
//             state={{ from: location }}
//           >
//             {movie.title}
//           </Link>
//         </li>
//       ))}
//     </MovieListStyle>
//   );
// };

// export default MovieListByName;

// MovieListByName.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };