import { useState } from 'react';
import { getPagesCount } from '../../utils/getPagesCount';
import './Pagination.scss';

const Pagination = ({ pagesCount, callback }) => {
  const [page, setPage] = useState(1);

  function changePage(pageNumber) {
    setPage(pageNumber);
    callback(pageNumber);
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
              onClick={() => changePage(pageNumber)}>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
