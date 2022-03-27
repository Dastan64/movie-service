import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const Top100 = observer(() => {
  useEffect(() => {
    Store.getTop100PopularMovies(1);
  }, []);

  return (
    <section className='app__category category'>
      <LinkHeading
        text={'Популярное'}
        url={'/top-100-popular-movies'}
        isWhite
      />
      <MoviesSlider movies={Store.top100PopularMovies.movies.slice(0, 14)} />
    </section>
  );
});

export default Top100;
