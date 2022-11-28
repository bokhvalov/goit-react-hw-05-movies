import MoviesList from "components/MoviesList";
import { getTrandingMovies } from "themoviedbAPI"

const Home = async () => {
const trandingMovies = await getTrandingMovies();

return (
    <main>
      <MoviesList movies={trandingMovies} />
    </main>
  );
};

export default Home;