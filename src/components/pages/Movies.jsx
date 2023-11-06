import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieListByName from 'components/MovieListByName/MovieListByName';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'components/services/moviedb';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      fetchMovieByName(query)
        .then(resp => {
          if (!resp.ok) {
            setError('Sorry, something went wrong');
            throw new Error();
          }
          return resp.json();
        })
        .then(data => {
          if (data.results.length === 0) {
            setError('Sorry, nothing found');
            throw new Error();
          }

          setMovieList(
            data.results.map(film => ({ title: film.title, id: film.id }))
          );
        })
        .catch(err => console.log(err));
    }
  }, [query]);

  return (
    <>
      <SearchMovie setSearchText={query => setSearchParams({ query })} />

      {error && <h3>{error}</h3>}
      {!error && movieList.length > 0 && <MovieListByName movies={movieList} />}
    </>
  );
};

export default Movies;

// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { fetchMovieByName } from 'components/services/moviedb';
// import SearchMovie from 'components/SearchMovie/SearchMovie';
// import MoviesList from 'components/MovieList/MovieList';

// const Movies = () => {
//   const [movieList, setMovieList] = useState([]);
//   const [error, setError] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query');

//   useEffect(() => {
//     if (query) {
//       fetchMovieByName(query)
//         .then(resp => {
//           if (!resp.ok) {
//             setError('Sorry, something went wrong');
//             throw new Error();
//           }
//           return resp.json();
//         })
//         .then(data => {
//           if (data.results.length === 0) {
//             setError('Sorry, nothing found');
//             throw new Error();
//           }

//           setMovieList(
//             data.results.map(film => ({ title: film.title, id: film.id }))
//           );
//         })
//         .catch(err => console.log(err));
//     }
//   }, [query]);

//   return (
//     <>
//       <SearchMovie setSearchText={query => setSearchParams({ query })} />

//       {error && <h3>{error}</h3>}
//       {!error && movieList.length > 0 && <MoviesList films={movieList} />}
//     </>
//   );
// };

// export default Movies;