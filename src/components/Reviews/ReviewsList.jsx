import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewsList.scss';

function Reviews({ reviews }) {
  return (
    <div className='more__reviews'>
      <h2 className='more__reviews-heading'>Рецензии зрителей</h2>
      <ul className='more__reviews-list'>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.reviewId} />
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
