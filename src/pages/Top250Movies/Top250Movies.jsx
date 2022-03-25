import { observer } from 'mobx-react-lite';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import store from '../../store/Store';

const Top250Movies = observer(() => {
  const { pagesCount } = store.top250movies;

  return (
    <>
      <h1>ТОП-250 фильмов, которые нельзя пропустить</h1>
      <Pagination pagesCount={pagesCount} type='TOP_250_BEST_FILMS' />
      <MoviesList movies={store.top250movies.movies} />
    </>
  );
});

export default Top250Movies;
