import clsx from 'clsx';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  const { nameRu, posterUrlPreview, year, rating, genres } = movie;

  const movieThumbStyle = clsx({
    'movie__thumb--red': rating < 4,
    'movie__thumb--green': rating > 7,
  });

  return (
    <div className='movie'>
      <div className='movie__poster-container'>
        <img
          className='movie__poster'
          src={posterUrlPreview}
          alt={nameRu}
          loading='lazy'
          draggable='false'
        />
      </div>
      {rating && rating !== 'null' ? (
        <div className={`movie__thumb ${movieThumbStyle}`}>
          <p className='movie__thumb-number'>{rating}</p>
        </div>
      ) : (
        ''
      )}
      <h2 className='movie__title'>{nameRu}</h2>
      {year !== 'null' && genres?.length > 0 && (
        <p className='movie__subtitle'>
          {year}, {genres[0].genre}
        </p>
      )}
    </div>
  );
};

export default MovieCard;
