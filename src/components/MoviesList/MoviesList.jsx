import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

function MoviesList({ movies }) {
  const moviesList =
    movies.length > 0 &&
    movies.map((movie) => {
      return (
        <Link
          className='app__link'
          to={`/film/${movie.filmId}/`}
          key={movie.filmId}>
          <MovieCard key={movie.filmId} movie={movie} id={movie.filmId} />
        </Link>
      );
    });
  return <div className='app__grid movies-grid'>{moviesList}</div>;
}

export default MoviesList;
