import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../..';
import Loader from '../Loader/Loader';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const Top250 = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.getTop250Movies(1);
  }, [store]);

  return (
    <>
      {store.top250movies.hasLoaded ? (
        <section className='app__category category'>
          <LinkHeading
            text={'ТОП-250 фильмов, которые нельзя пропустить'}
            url={'/top-250-movies'}
            isWhite
          />
          <MoviesSlider movies={store.top250movies.movies.slice(0, 14)} />
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
});

export default Top250;
