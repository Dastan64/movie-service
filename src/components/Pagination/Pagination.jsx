import { useState, useContext } from 'react';
import { StoreContext } from '../..';
import { getPagesCount } from '../../utils/getPagesCount';
import './Pagination.scss';

const Pagination = ({ pagesCount, type, ...rest }) => {
  const [page, setPage] = useState(1);
  const store = useContext(StoreContext);

  function changePage(e, pageNumber) {
    e.preventDefault();
    setPage(pageNumber);
    switch (type) {
      case 'TOP_250_BEST_FILMS':
        store.getTop250Movies(pageNumber);
        break;
      case 'TOP_100_POPULAR_FILMS':
        store.getTop100PopularMovies(pageNumber);
        break;
      case 'TOP_AWAIT_FILMS':
        store.getTopAwaitedMovies(pageNumber);
        break;
      case 'REVIEWS':
        store.getReviews(rest.kinopoiskId, pageNumber);
        break;
      default:
        break;
    }
  }
  return (
    <nav className='pages'>
      <ul className='pages__list'>
        {getPagesCount(pagesCount).map((pageNumber, index) => (
          <li className='pages__list-item' key={index}>
            <a
              className={`pages__link ${
                pageNumber === page ? 'pages__link--active' : ''
              }`}
              href='#'
              id={pageNumber}
              onClick={(e) => changePage(e, pageNumber)}>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
