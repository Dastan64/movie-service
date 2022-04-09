import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../..';
import LinkHeading from '../LinkHeading/LinkHeading';
import Loader from '../Loader/Loader';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const Top100 = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.getTop100PopularMovies(1);
  }, [store]);

  return (
    <>
      {store.top100PopularMovies.hasLoaded ? (
        <section className='app__category category'>
          <LinkHeading
            text={'Популярное'}
            url={'/top-100-popular-movies'}
            isWhite
          />
          <MoviesSlider
            movies={store.top100PopularMovies.movies.slice(0, 14)}
          />
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
});

export default Top100;
