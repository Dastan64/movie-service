import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MovieCard from '../MovieCard/MovieCard';

function SimilarsList({ similars }) {
  return (
    <div className='more__movie-similars'>
      {similars.map((similarMovie) => {
        return (
          <Link to={`/movie/${similarMovie.filmId}`} key={similarMovie.filmId}>
            <MovieCard movie={similarMovie} />
          </Link>
        );
      })}
    </div>
  );
}

export default SimilarsList;
