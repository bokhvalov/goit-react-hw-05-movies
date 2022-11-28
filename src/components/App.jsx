import Home from 'pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './Layout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        {/* </Route> */}
      </Route>
    </Routes>
  );
};
