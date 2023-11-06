// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { fetchTrendingMovies } from 'components/services/moviedb';
// import { TrendingMoviesList } from 'components/HomePage/TrendingMoviesList.styled';

// const Home = () => {
//   const [trandingMovies, setTrandingMovies] = useState([]);
//   const [error, setError] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     setError('');
//     fetchTrendingMovies()
//       .then(resp => {
//         if (!resp.ok) {
//           setError('Sorry, something wrong');
//           throw new Error();
//         }
//         return resp.json();
//       })
//       .then(data => {
//         if (data.results.length === 0) {
//           setError("Sorry we didn't find anything");
//           throw new Error();
//         }
//         return data.results;
//       })
//       .then(data => {
//         setTrandingMovies(
//           data.map(film => ({ title: film.title, id: film.id }))
//         );
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <TrendingMoviesList>
//       {error ? (
//         <li>{error}</li>
//       ) : (
//         trandingMovies.map(film => (
//           <li key={film.id}>
//             <Link to={`/movies/${film.id}`} state={location.pathname}>
//               {film.title}
//             </Link>
//           </li>
//         ))
//       )}
//     </TrendingMoviesList>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/services/moviedb';
import MoviesList from 'components/MovieList/MovieList';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    setError('');
    fetchTrendingMovies()
      .then(resp => {
        if (!resp.ok) {
          setError('Sorry, something went wrong');
          throw new Error();
        }
        return resp.json();
      })
      .then(data => {
        if (data.results.length === 0) {
          setError("Sorry, we didn't find anything");
          throw new Error();
        }
        return data.results;
      })
      .then(data => {
        setTrandingMovies(
          data.map(film => ({ title: film.title, id: film.id }))
        );
      })
      .catch(err => console.log(err));
  }, []);

  const customStyles = {
    padding: '140px',
    listStyle: 'none',
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <MoviesList films={trandingMovies} customStyles={customStyles} />
    </div>
  );
};

export default Home;