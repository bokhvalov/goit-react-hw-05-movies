import { lazy, Suspense, useEffect, useState } from 'react';
import { getTrandingMovies } from 'themoviedbAPI';
const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState();

  useEffect(() => {
    const fetchPopular = async () => {
      const fetchResult = await getTrandingMovies();
      setTrandingMovies(fetchResult);
    };

    fetchPopular();
  }, []);
  
  if (trandingMovies) {
    return (
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <MoviesList movies={trandingMovies} />
        </Suspense>
      </main>
    );
  }
};

export default Home;
