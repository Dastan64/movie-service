import '../styles/MovieCard.scss';

function MovieCard({ movie }) {
  let { nameRu, posterUrlPreview, year } = movie;
  // release_date = release_date.substr(0, 4);
  return (
    <div className='movie'>
      <div className='movie__poster-container'>
        <img className='movie__poster' src={posterUrlPreview} alt='' />
      </div>
      <h2 className='movie__title'>{nameRu}</h2>
      <p className='movie__subtitle'>{year}</p>
    </div>
  );
}

export default MovieCard;
