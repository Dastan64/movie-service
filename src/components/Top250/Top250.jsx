import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const Top250 = observer(() => {
  useEffect(() => {
    store.getTop250Movies(1);
  }, []);

  return (
    <section className='app__category category'>
      <LinkHeading
        text={'ТОП-250 фильмов, которые нельзя пропустить'}
        url={'/top-250-movies'}
        isWhite
      />
      <MoviesSlider movies={store.top250movies.movies.slice(0, 14)} />
    </section>
  );
});

export default Top250;
