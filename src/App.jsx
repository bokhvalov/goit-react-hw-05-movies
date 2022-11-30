import Cast from 'components/Cast/Cast';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/Layout/SharedLayout';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
      </Route>
    </Routes>
  );
};
