import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function SequelsList({ sequels }) {
  return (
    <>
      <h4 className='about__sequels-heading'>
        Сиквелы и приквелы{' '}
        <span style={{ color: 'rgba(255,254,254,.4)' }}>
          {sequels && sequels.length}
        </span>{' '}
      </h4>
      <div className='about__sequels'>
        {sequels &&
          sequels.map((sequel) => (
            <Link
              className='about__link'
              to={`/movie/${sequel.filmId}`}
              key={sequel.filmId}>
              <MovieCard movie={sequel} />
            </Link>
          ))}
      </div>
    </>
  );
}

export default SequelsList;
