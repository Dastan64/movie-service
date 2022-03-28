import store from '../../store/Store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

//Components
import Pagination from '../../components/Pagination/Pagination';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

//Styles
import './Reviews.scss';

const Reviews = observer(() => {
  const { nameRu, kinopoiskId } = store.movie.info;
  const { reviews, pagesCount } = store.movie.reviews;

  return (
    <div className='reviews'>
      <h2 className='reviews__title'>
        Рецензии / <Link to={`/movie/${kinopoiskId}/`}>{nameRu}</Link>
      </h2>
      {pagesCount > 1 && (
        <Pagination
          pagesCount={pagesCount}
          type='REVIEWS'
          kinopoiskId={kinopoiskId}
        />
      )}
      <ul className='reviews__list'>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.reviewId} />;
        })}
      </ul>
    </div>
  );
});

export default Reviews;
