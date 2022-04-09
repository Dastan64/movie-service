import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import { StoreContext } from '../..';

const Top250Movies = observer(() => {
  const store = useContext(StoreContext);
  const { pagesCount } = store.top250movies;

  return (
    <div className='app__category-page category-page'>
      <h1>ТОП-250 фильмов, которые нельзя пропустить</h1>
      {pagesCount > 1 && (
        <Pagination pagesCount={pagesCount} type='TOP_250_BEST_FILMS' />
      )}
      <MoviesList movies={store.top250movies.movies} />
    </div>
  );
});

export default Top250Movies;
