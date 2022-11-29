import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
const { useState } = require('react');
const { useEffect } = require('react');
const { useSearchParams } = require('react-router-dom');
const { searchMovie } = require('themoviedbAPI');

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) {
      setSearchResult(null);
      return;
    }

    async function fetchMovies() {
      const searchResult = await searchMovie(searchQuery);
      setSearchResult(searchResult);
    }

    fetchMovies();
  }, [searchQuery]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <SearchForm
        value={searchQuery ?? ''}
        onSubmit={value => onSubmit(value)}
      ></SearchForm>
      {searchResult && <MoviesList movies={searchResult}></MoviesList>}
    </>
  );
};

export default Movies;
