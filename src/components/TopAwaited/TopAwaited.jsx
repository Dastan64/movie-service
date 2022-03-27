import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const TopAwaited = observer(() => {
  useEffect(() => {
    store.getTopAwaitedMovies(1);
  }, []);

  return (
    <section className='app__category category'>
      <LinkHeading
        text={'Самые ожидаемые фильмы'}
        url={'/top-awaited-movies'}
        isWhite
      />
      <MoviesSlider movies={store.topAwaitedMovies.movies.slice(0, 14)} />
    </section>
  );
});

export default TopAwaited;
