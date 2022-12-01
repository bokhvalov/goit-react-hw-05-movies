import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { getMovieDetails } from 'themoviedbAPI';
const { useEffect, useState, Suspense } = require('react');

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState();
  const backLinkHref = location.state?.from ?? '/movies';


  useEffect(() => {
    async function getMovie() {
      const fetchResult = await getMovieDetails(id);
      setMovieDetails(fetchResult);
    }
    getMovie();
  }, [id]);


  
  if (movieDetails) {
    return (  
      <>
        <Link to={backLinkHref}> Go Back</Link>

        <div className={css.movieDetails}>
          <img
            className={css.moviePoster}
            src={'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path}
            alt="movie poster"
          />  

          <div>
            <h1>{movieDetails.original_title}</h1>
            <p>User Score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <p>
              {movieDetails.genres.map(
                ({ name }, i) =>
                  name + (i !== movieDetails.genres.length - 1 ? ', ' : '')
              )}
            </p>
          </div>
        </div>
        <div className={css.addInf}>
          <h3>Additional information</h3>
          <Link to={'cast'} className={css.addLink} state={{from:location.state?.from}}>
            Cast
          </Link>
          <Link to={'reviews'} className={css.addLink} state={{from:location.state?.from}}>
            Reviews
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

export default MovieDetails