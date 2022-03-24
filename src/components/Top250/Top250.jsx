import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesList from '../MoviesList/MoviesList';
import './Top250.scss';

const Top250 = observer(() => {
  useEffect(() => {
    store.getTop250Movies();
  }, []);

  return (
    <section className='top-250'>
      <LinkHeading
        text={'ТОП-250 фильмов, которые нельзя пропустить'}
        url={'/movies/top250'}
        isWhite={true}
      />
      <MoviesList movies={store.top250movies} />
    </section>
  );
});

export default Top250;