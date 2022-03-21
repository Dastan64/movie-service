import { formatFilmLength } from '../../utils/formatFilmLength';

const MovieLength = ({ filmLength }) => {
  return (
    <div className='about__info-line'>
      <p className='about__info-caption'>Время:</p>
      <p className='about__time'>{formatFilmLength(filmLength)}</p>
    </div>
  );
};

export default MovieLength;
