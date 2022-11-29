import { Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { getMovieDetails } from 'themoviedbAPI';

const { useEffect, useState } = require('react');

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    async function getMovie() {
      const fetchResult = await getMovieDetails(id);
      setMovieDetails(fetchResult);
      console.log(fetchResult);
    }

    getMovie();
  }, [id]);

  return (
    <>
    <div className={css.movieDetails}>
      <img
        className={css.moviePoster}
        src={'https://image.tmdb.org/t/p/w500/' + movieDetails?.poster_path}
        alt="movie poster"
      />
      <div>
            <h1>{movieDetails?.original_title}</h1>
            <p>User Score: {movieDetails?.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <p>
                {movieDetails.genres.map(
                ({ name }, i) =>
                    name + (i !== movieDetails.genres.length - 1 ? ', ' : null)
                )}
            </p>
      </div>
    </div>
    <Outlet/>
    </>
  );
};
