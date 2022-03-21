import store from '../../store/Store';
import { useState } from 'react';
import './Reviews.scss';
import { observer } from 'mobx-react-lite';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';
import { getPagesCount } from '../../utils/getPagesCount';

const Reviews = observer(() => {
  const [page, setPage] = useState(1);
  const { nameRu, kinopoiskId } = store.movie.info;
  const { reviews, pagesCount } = store.movie.reviews;

  function changePage(pageNumber) {
    setPage(pageNumber);
    store.getReviews(kinopoiskId, pageNumber);
  }

  return (
    <div className='reviews'>
      <h2 className='reviews__title'>
        Рецензии / <Link to={`/movie/${kinopoiskId}/`}>{nameRu}</Link>
      </h2>
      <nav className='reviews__pages'>
        <ul className='reviews__pages-list'>
          {getPagesCount(pagesCount).map((pageNumber, index) => (
            <li className='reviews__pages-list-item' key={index}>
              <a
                className={`reviews__pages-link ${
                  pageNumber === page ? 'reviews__pages-link--active' : ''
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
      <ul className='reviews__list'>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.reviewId} />;
        })}
      </ul>
    </div>
  );
});

export default Reviews;
