import MoviesList from "components/MoviesList/MoviesList";
import { getTrandingMovies } from "themoviedbAPI"

export const Home = async () => {
const trandingMovies = await getTrandingMovies();

return (
    <main>
      <MoviesList movies={trandingMovies} />
    </main>
  );
};