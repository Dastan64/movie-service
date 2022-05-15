import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import MovieCard from '../MovieCard/MovieCard';

function SequelsList({ sequels }) {
  return (
    <>
      <h4 className='about__sequels-heading'>
        Сиквелы и приквелы{' '}
        <span style={{ color: 'rgba(255,254,254,.4)' }}>
          {sequels && sequels.length}
        </span>{' '}
      </h4>
      <div className='about__sequels'>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={3}
          spaceBetween={8}>
          {sequels &&
            sequels.map((sequel) => (
              <SwiperSlide key={sequel.filmId}>
                <Link
                  className='about__link'
                  to={`/film/${sequel.filmId}`}
                  key={sequel.filmId}>
                  <MovieCard movie={sequel} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default SequelsList;
