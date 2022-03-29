import { useParams } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewsList.scss';
import LinkHeading from '../LinkHeading/LinkHeading';

function Reviews({ reviews }) {
  const { id } = useParams();
  return (
    <section className='more__reviews reviews-list'>
      <LinkHeading url={`/film/${id}/reviews`} text={'Рецензии зрителей'} />
      <ul className='reviews-list__list'>
        {reviews.slice(0, 10).map((review) => (
          <ReviewCard review={review} key={review.reviewId} />
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
