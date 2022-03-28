import { observer } from 'mobx-react-lite';
import store from '../../store/Store';

import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';

const Top100PopularMovies = observer(() => {
  const { pagesCount } = store.top100PopularMovies;

  return (
    <div className='app__category-page category-page'>
      <h1>Популярное</h1>
      {pagesCount > 1 && (
        <Pagination pagesCount={pagesCount} type='TOP_100_POPULAR_FILMS' />
      )}
      <MoviesList movies={store.top100PopularMovies.movies} />
    </div>
  );
});

export default Top100PopularMovies;
