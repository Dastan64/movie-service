const RatingAge = ({ ratingAgeLimits }) => {
  return (
    <div className='about__info-line'>
      <p className='about__info-caption'>Возраст:</p>
      <p className='about__rating'>
        {/\d/g.test(ratingAgeLimits)
          ? ratingAgeLimits.substring(3) + '+'
          : ratingAgeLimits}
      </p>
    </div>
  );
};

export default RatingAge;
