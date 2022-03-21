import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import MovieCard from '../MovieCard/MovieCard';
import './Similars.scss';

const SimilarsList = ({ similars }) => {
  return (
    <section className='more__similars similars'>
      <h2>Если вам понравился этот фильм {similars.length}</h2>
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
