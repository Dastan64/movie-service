import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function MoviesList({ movies }) {
  const moviesList =
    movies.length > 0 &&
    movies.map((movie) => {
      return (
        <Link
          className='app__link'
          to={`/movie/${movie.filmId}/`}
          key={movie.filmId}>
          <MovieCard key={movie.filmId} movie={movie} id={movie.filmId} />
        </Link>
      );
    });
  return <div className='app__grid grid'>{moviesList}</div>;
}

export default MoviesList;
