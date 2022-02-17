import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchMovieDetail } from '../../hooks/useFetchMovieDetail';
import counter from '../../store/counter';
import './MovieDetail.scss';

function MovieDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchMovieDetail(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
  );
  useEffect(() => {
    counter.getAllMovieInfo(843650);
  }, [id]);
  if (error) {
    console.error(error);
  }

  let posterUrlPreview,
    nameRu,
    nameOriginal,
    shortDescription,
    year,
    countries,
    genres,
    slogan,
    ratingMpaa,
    filmLength;

  if (data) {
    console.log(data);
    ({
      posterUrlPreview,
      nameRu,
      nameOriginal,
      shortDescription,
      year,
      countries,
      genres,
      slogan,
      ratingMpaa,
      filmLength,
    } = data);
  }

  return (
    <>
      {isLoading && <h2>Загрузка...</h2>}
      {data && (
        <div className='detail'>
          <div className='detail__wrapper'>
            <div className='detail__container'>
              <div className='detail__image-container'>
                {posterUrlPreview && (
                  <img src={posterUrlPreview} alt={nameRu} />
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
                    <div className='about__info-line'>
                      <p className='about__info-caption'>Страна:</p>
                      <p>{countries[0].country}</p>
                    </div>
                    <div className='about__info-line'>
                      <p className='about__info-caption'>Жанр:</p>
                      <p>{countries[0].country}</p>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='more detail__more'>
            <div className='more__content'>
              <h2>Знаете ли вы, что…</h2>
              {Object.keys(counter.movie).length > 2 && (
                <p>{counter.movie.facts[0].text}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
