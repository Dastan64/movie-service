import './MovieCard.scss';

function MovieCard({ movie }) {
  const { nameRu, posterUrlPreview, year, rating, genres } = movie;
  let classNames = ['movie__thumb'];

  if (rating > 7) {
    classNames.push('movie__thumb--green');
  } else if (rating < 4) {
    classNames.push('movie__thumb--red');
  }
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
        <div className={classNames.join(' ')}>
          <p className='movie__thumb-number'>{rating}</p>
        </div>
      ) : (
        ''
      )}
      <h2 className='movie__title'>{nameRu}</h2>
      {year !== 'null' && genres && (
        <p className='movie__subtitle'>
          {year}, {genres[0].genre}
        </p>
      )}
    </div>
  );
}

export default MovieCard;
