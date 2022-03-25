import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesList from '../MoviesList/MoviesList';
import '../Top250/Top250.scss';

const TopAwaited = observer(() => {
  useEffect(() => {
    store.getTopAwaitedMovies(1);
  }, []);

  return (
    <section className='top-250'>
      <LinkHeading
        text={'Самые ожидаемые фильмы'}
        url={'/top-awaited-movies'}
        isWhite={true}
      />
      <MoviesList movies={store.topAwaitedMovies.movies.slice(0, 12)} />
    </section>
  );
});

export default TopAwaited;
