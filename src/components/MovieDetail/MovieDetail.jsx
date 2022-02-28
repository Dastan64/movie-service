import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import store from '../../store/Store';
import FactsList from '../FactsList/FactsList';
import SequelsList from '../SequelsList/SequelsList';
import SimilarsList from '../SimilarsList/SimilarsList';
import './MovieDetail.scss';

const MovieDetail = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    store.getAllMovieInfo(id);
  }, [id]);

  const {
    posterUrlPreview,
    nameRu,
    nameOriginal,
    shortDescription,
    year,
    countries,
    slogan,
    ratingMpaa,
    filmLength,
  } = store.movie.info;

  const sequels = store.movie.sequels;
  const facts = store.movie.facts;
  const similars = store.movie.similars;

  return (
    <div className='detail'>
      <div className='detail__wrapper'>
        <div className='detail__container'>
          <div className='detail__image-container'>
            {posterUrlPreview && <img src={posterUrlPreview} alt={nameRu} />}
          </div>
          <div className='detail__info'>
            <h2 className='detail__heading'>
              {nameRu} ({year})
            </h2>
            <h4 className='detail__subheading'>{nameOriginal}</h4>
            <p className='detail__description'>{shortDescription}</p>
            <div className='about detail__about'>
              <h3 className='about__heading'>О фильме</h3>
              <div className='about__info'>
                <div className='about__info-line'>
                  <p className='about__info-caption'>Год производства:</p>
                  <p>{year}</p>
                </div>
                {countries && (
                  <>
                    <div className='about__info-line'>
                      <p className='about__info-caption'>Страна:</p>
                      <p>{countries[0].country}</p>
                    </div>
                  </>
                )}
                <div className='about__info-line'>
                  <p className='about__info-caption'>Слоган:</p>
                  <p>"{slogan}"</p>
                </div>
                {ratingMpaa && (
                  <div className='about__info-line'>
                    <p className='about__info-caption'>Рейтинг MPAA:</p>
                    <p>{ratingMpaa.toUpperCase()}</p>
                  </div>
                )}
                <div className='about__info-line'>
                  <p className='about__info-caption'>Время:</p>
                  <p>{filmLength} мин.</p>
                </div>
                {sequels.length > 0 && <SequelsList sequels={sequels} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='more detail__more'>
        <div className='more__content'>
          <h2>Знаете ли вы, что...</h2>
          {facts.length > 0 && <FactsList facts={facts} />}
          <div className='more__similars'>
            <h2>Если вам понравился этот фильм {similars.length}</h2>
            {similars.length > 0 && <SimilarsList similars={similars} />}
          </div>
        </div>
      </div>
    </div>
  );
});

export default MovieDetail;
