import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import MovieCard from '../MovieCard/MovieCard';
import './Similars.scss';
import titleArrow from '../../assets/images/title-arrow.svg';

const SimilarsList = ({ similars }) => {
  return (
    <section className='more__similars similars'>
      <h2 className='similars__title'>
        Если вам понравился этот фильм{' '}
        <span className='similars__number'>{similars.length}</span>
        <img className='similars__icon' src={titleArrow} alt='' />
      </h2>
      <div className='similars__movie-similars'>
        <Swiper modules={[Navigation]} navigation slidesPerView={5}>
          {similars.map((similarMovie) => {
            return (
              <SwiperSlide key={similarMovie.filmId}>
                <Link to={`/movie/${similarMovie.filmId}`}>
                  <MovieCard movie={similarMovie} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarsList;
