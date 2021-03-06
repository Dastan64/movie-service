import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import { StoreContext } from '../..';

const TopAwaitedMovies = observer(() => {
  const store = useContext(StoreContext);
  const { pagesCount } = store.topAwaitedMovies;

  return (
    <div className='app__category-page category-page'>
      <h1>Самые ожидаемые фильмы</h1>
      {pagesCount > 1 && (
        <Pagination pagesCount={pagesCount} type='TOP_AWAIT_FILMS' />
      )}
      <MoviesList movies={store.topAwaitedMovies.movies} />
    </div>
  );
});

export default TopAwaitedMovies;
