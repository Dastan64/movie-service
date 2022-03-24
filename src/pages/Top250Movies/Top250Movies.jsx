import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import store from '../../store/Store';

const Top250Movies = () => {
  return (
    <>
      <h1>ТОП-250 фильмов, которые нельзя пропустить</h1>
      <Pagination pagesCount={11} callback={store.getTop250Movies} />
      <MoviesList movies={store.top250movies} />
    </>
  );
};

export default Top250Movies;
