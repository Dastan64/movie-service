import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies }) => {
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
  return (
    <>
      {moviesList.length > 0 ? (
        <div className='app__grid movies-grid'>{moviesList}</div>
      ) : (
        <h2 className='app__warning-heading'>
          Извините, но мы не смогли найти ничего похожего.
        </h2>
      )}
    </>
  );
};

export default MoviesList;
