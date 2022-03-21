const Genres = ({ genres }) => {
  return (
    <div className='about__info-line'>
      <p className='about__info-caption'>Жанр:</p>
      <p>{genres.map((genre) => genre.genre).join(', ')}</p>
    </div>
  );
};

export default Genres;
