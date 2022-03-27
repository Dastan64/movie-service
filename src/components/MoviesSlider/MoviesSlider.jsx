import { Link } from 'react-router-dom';

//Swiper parts
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';

import './MoviesSlider.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesSlider = ({ movies }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={6}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      spaceBetween={8}>
      {movies &&
        movies.map((movie) => (
          <SwiperSlide key={movie.filmId}>
            <Link
              className='about__link'
              to={`/movie/${movie.filmId}`}
              key={movie.filmId}>
              <MovieCard movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MoviesSlider;
