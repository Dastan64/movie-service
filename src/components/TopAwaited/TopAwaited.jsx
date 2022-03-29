import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import Loader from '../Loader/Loader';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const TopAwaited = observer(() => {
  useEffect(() => {
    Store.getTopAwaitedMovies(1);
  }, []);

  return (
    <>
      {Store.topAwaitedMovies.hasLoaded ? (
        <section className='app__category category'>
          <LinkHeading
            text={'Самые ожидаемые фильмы'}
            url={'/top-awaited-movies'}
            isWhite
          />
          <MoviesSlider movies={Store.topAwaitedMovies.movies.slice(0, 14)} />
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
});

export default TopAwaited;
