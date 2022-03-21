import { Link, useParams } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import arrowNext from '../../assets/images/arrow-next.svg';
import './ReviewsList.scss';

function Reviews({ reviews }) {
  const { id } = useParams();
  return (
    <section className='more__reviews'>
      <Link to={`/movie/${id}/reviews`}>
        <h2 className='more__reviews-heading'>
          Рецензии зрителей
          <img className='more__reviews-icon' src={arrowNext} alt='' />
        </h2>
      </Link>
      <ul className='more__reviews-list'>
        {reviews.slice(0, 10).map((review) => (
          <ReviewCard review={review} key={review.reviewId} />
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
