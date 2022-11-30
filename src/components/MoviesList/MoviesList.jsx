import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link className={css.movie} to={'/movies/'+movie.id} state={{from:location}}>{movie.title}</Link>
        </li>
      ))}
      </ul>
  );
};
export default MoviesList;
