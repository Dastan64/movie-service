import clsx from 'clsx';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  const { nameRu, posterUrlPreview, year, rating, genres, filmId } = movie;

  const movieThumbStyle = clsx({
    'movie__thumb--red': rating < 4,
    'movie__thumb--green': rating > 7,
  });

  function addToBookmark(e) {
    const id = e.target.closest('.movie').dataset.movieId;
    localStorage.setItem('movieId', id);
  }

  return (
    <div className='movie' data-movie-id={filmId}>
      <div className='movie__poster-container'>
        <img
          className='movie__poster'
          src={posterUrlPreview}
          alt={nameRu}
          loading='lazy'
          draggable='false'
        />
        <div className='movie__overlay'>
          <button className='movie__bookmark-btn' onClick={addToBookmark}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='rgba(255, 255, 255, 0.6)'
              strokeWidth='1'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
              />
            </svg>
          </button>
        </div>
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
