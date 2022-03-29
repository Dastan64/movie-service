import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

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
          <SwiperSlide key={uuidv4()}>
            <Link
              className='about__link'
              to={`/film/${movie.filmId}`}
              key={movie.filmId}>
              <MovieCard movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MoviesSlider;
