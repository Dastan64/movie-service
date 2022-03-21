import clsx from 'clsx';
import store from '../../store/Store';
import './Rating.scss';
import { formatNumber } from '../../utils/formatNumber';

const Rating = () => {
  const {
    ratingKinopoisk,
    ratingKinopoiskVoteCount,
    ratingImdb,
    ratingImdbVoteCount,
  } = store.movie.info;

  const ratingNumberStyle = clsx({
    'rating__number--low': ratingKinopoisk < 5,
    'rating__number--average': ratingKinopoisk >= 5 && ratingKinopoisk < 7,
    'rating__number--high': ratingKinopoisk >= 7 && ratingKinopoisk < 8.5,
    'rating__number--golden': ratingKinopoisk >= 8.5,
  });

  return (
    <section className='more__rating rating'>
      <h3 className='rating__heading'>Рейтинг фильма</h3>
      <p className={`rating__number ${ratingNumberStyle}`}>{ratingKinopoisk}</p>
      <div className='rating__ratings'>
        {ratingKinopoiskVoteCount && (
          <p>{formatNumber(ratingKinopoiskVoteCount)} оценок</p>
        )}
        {ratingImdbVoteCount && (
          <p>
            <span>IMDb: {ratingImdb}</span> ({formatNumber(ratingImdbVoteCount)}{' '}
            оценок)
          </p>
        )}
      </div>
    </section>
  );
};

export default Rating;
