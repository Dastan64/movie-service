import { observer } from 'mobx-react-lite';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import store from '../../store/Store';

const TopAwaitedMovies = observer(() => {
  const { pagesCount } = store.topAwaitedMovies;

  return (
    <>
      <h1>Самые ожидаемые фильмы</h1>
      {pagesCount > 1 && (
        <Pagination pagesCount={pagesCount} type='TOP_AWAIT_FILMS' />
      )}
      <MoviesList movies={store.topAwaitedMovies.movies} />
    </>
  );
});

export default TopAwaitedMovies;
