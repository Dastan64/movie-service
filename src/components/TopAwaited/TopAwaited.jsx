import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../..';
import LinkHeading from '../LinkHeading/LinkHeading';
import Loader from '../Loader/Loader';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const TopAwaited = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.getTopAwaitedMovies(1);
  }, [store]);

  return (
    <>
      {store.topAwaitedMovies.hasLoaded ? (
        <section className='app__category category'>
          <LinkHeading
            text={'Самые ожидаемые фильмы'}
            url={'/top-awaited-movies'}
            isWhite
          />
          <MoviesSlider movies={store.topAwaitedMovies.movies.slice(0, 14)} />
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
});

export default TopAwaited;
