import { SearchForm } from 'components/SearchForm/SearchForm';
const { useState, Suspense, lazy } = require('react');
const { useEffect } = require('react');
const { useSearchParams } = require('react-router-dom');
const { searchMovie } = require('themoviedbAPI');
const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

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
      <Suspense fallback={<div>Loading...</div>}>
        {searchResult && <MoviesList movies={searchResult}></MoviesList>}
      </Suspense>
    </>
  );
};

export default Movies;
