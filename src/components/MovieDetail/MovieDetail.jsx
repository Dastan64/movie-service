//Core
import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { StoreContext } from '../..';

//Styles
import './MovieDetail.scss';

//Components
import BoxOffice from '../BoxOffice/BoxOffice';
import FactsList from '../Facts/Facts';
import Staff from '../Staff/Staff';
import SequelsList from '../SequelsList/SequelsList';
import Similars from '../Similars/Similars';
import Loader from '../Loader/Loader';
import ReviewsList from '../Reviews/ReviewsList';
import Countries from '../Countries/Countries';
import Genres from '../Genres/Genres';
import RatingMpaa from '../RatingMpaa/RatingMpaa';
import RatingAge from '../RatingAge/RatingAge';
import MovieLength from '../MovieLength/MovieLength';
import Rating from '../Rating/Rating';

const MovieDetail = observer(() => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  useEffect(() => {
    store.getAllMovieInfo(id);
  }, [id, store]);

  const {
    posterUrlPreview,
    nameRu,
    nameOriginal,
    shortDescription,
    description,
    year,
    countries,
    genres,
    slogan,
    ratingMpaa,
    ratingAgeLimits,
    filmLength,
  } = store.movie.info;

  const sequels = store.movie.sequels;
  const facts = store.movie.facts;
  const similars = store.movie.similars;
  const boxOffice = store.movie.boxOffice;
  const staff = store.movie.staff;
  const reviews = store.movie.reviews?.reviews;

  return (
    <>
      {!store.movie.hasLoaded ? (
        <Loader />
      ) : (
        <div className='detail'>
          <div className='detail__wrapper'>
            <div className='detail__container'>
              <div className='detail__image-container'>
                {posterUrlPreview && (
                  <img src={posterUrlPreview} alt={nameRu} draggable='false' />
                )}
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
                    {countries.length > 0 && (
                      <Countries countries={countries} />
                    )}
                    {genres.length > 0 && <Genres genres={genres} />}
                    {slogan && (
                      <div className='about__info-line'>
                        <p className='about__info-caption'>Слоган:</p>
                        <p className='about__slogan'>"{slogan}"</p>
                      </div>
                    )}
                    {staff.length > 0 && <Staff staff={staff} />}
                    {boxOffice.length > 0 && (
                      <BoxOffice boxOffice={boxOffice} />
                    )}

                    {ratingAgeLimits && (
                      <RatingAge ratingAgeLimits={ratingAgeLimits} />
                    )}
                    {ratingMpaa && <RatingMpaa ratingMpaa={ratingMpaa} />}
                    {filmLength && <MovieLength filmLength={filmLength} />}
                    {sequels.length > 0 && <SequelsList sequels={sequels} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='more detail__more'>
            <div className='more__content'>
              <p className='more__full-description'>{description}</p>
              <Rating />
              {similars.length > 0 && <Similars similars={similars} />}
              {facts.length > 0 && <FactsList facts={facts} />}
              {reviews && reviews.length > 0 && (
                <ReviewsList reviews={reviews} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default MovieDetail;
