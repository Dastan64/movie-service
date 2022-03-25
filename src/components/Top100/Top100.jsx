import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Store from '../../store/Store';
import LinkHeading from '../LinkHeading/LinkHeading';
import MoviesList from '../MoviesList/MoviesList';

const Top100 = observer(() => {
  useEffect(() => {
    Store.getTop100PopularMovies(1);
  }, []);

  return (
    <section className='top-250'>
      <LinkHeading
        text={'Популярное'}
        url={'/top-100-popular-movies'}
        isWhite={true}
      />
      <MoviesList movies={Store.top100PopularMovies.movies.slice(0, 12)} />
    </section>
  );
});

export default Top100;
