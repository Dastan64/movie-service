import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import MovieCard from '../MovieCard/MovieCard';

function SimilarsList({ similars }) {
  return (
    <div className='more__movie-similars'>
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
  );
}

export default SimilarsList;
