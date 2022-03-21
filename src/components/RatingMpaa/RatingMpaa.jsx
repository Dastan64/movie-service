const RatingMpaa = ({ ratingMpaa }) => {
  return (
    <div className='about__info-line'>
      <p className='about__info-caption'>Рейтинг MPAA:</p>
      <p className='about__rating'>
        {ratingMpaa
          .toUpperCase()
          .match(/[a-z]+|\d+/gi)
          .join('-')}
      </p>
    </div>
  );
};

export default RatingMpaa;
