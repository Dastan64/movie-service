import { Link, useParams } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import titleArrow from '../../assets/images/title-arrow.svg';
import './ReviewsList.scss';

function Reviews({ reviews }) {
  const { id } = useParams();
  return (
    <section className='more__reviews reviews-list'>
      <Link to={`/movie/${id}/reviews`}>
        <h2 className='reviews-list__heading'>
          Рецензии зрителей
          <img className='reviews-list__icon' src={titleArrow} alt='' />
        </h2>
      </Link>
      <ul className='reviews-list__list'>
        {reviews.slice(0, 10).map((review) => (
          <ReviewCard review={review} key={review.reviewId} />
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
