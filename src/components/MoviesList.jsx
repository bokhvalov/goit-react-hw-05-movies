import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.results.map(movie => (
        <li>
          <Link to={movie.id}></Link>
          {movie.title}
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
