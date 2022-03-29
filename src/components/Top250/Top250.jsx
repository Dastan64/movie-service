import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Store from '../../store/Store';
import Loader from '../Loader/Loader';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const Top250 = observer(() => {
  useEffect(() => {
    Store.getTop250Movies(1);
  }, []);

  return (
    <>
      {Store.top250movies.hasLoaded ? (
        <section className='app__category category'>
          <LinkHeading
            text={'ТОП-250 фильмов, которые нельзя пропустить'}
            url={'/top-250-movies'}
            isWhite
          />
          <MoviesSlider movies={Store.top250movies.movies.slice(0, 14)} />
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
});

export default Top250;
