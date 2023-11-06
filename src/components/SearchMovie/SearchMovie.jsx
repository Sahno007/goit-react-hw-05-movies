import { useState } from 'react';
import { SearchMovieStyle } from './SearchMovieStyle.styled';
import { useNavigate } from 'react-router-dom';

const SearchMovie = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handlerChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      const query = inputValue.trim().toLowerCase();
      navigate(`/movies?query=${query}`);
      setInputValue('');
    } else {
      alert('Please, write anything');
    }
  };

  return (
    <SearchMovieStyle onSubmit={handlerSubmit}>
      <input onChange={handlerChange} value={inputValue} />
      <button type="submit">Search</button>
    </SearchMovieStyle>
  );
};

export default SearchMovie;