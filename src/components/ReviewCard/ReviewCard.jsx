import './ReviewCard.scss';
import clsx from 'clsx';
import avatar from '../../assets/images/avatar.svg';
import { formatDate } from '../../utils/formatDate';
import { useState } from 'react';

function ReviewCard({ review }) {
  const [isTextShort, setIsTextShort] = useState(true);
  const {
    reviewAutor,
    reviewData,
    reviewTitle,
    reviewDescription,
    reviewType,
  } = review;

  function showMoreReview() {
    setIsTextShort(!isTextShort);
  }

  const reviewBackground = clsx({
    'review--positive': reviewType === 'POSITIVE',
    'review--neutral': reviewType === 'NEUTRAL',
    'review--negative': reviewType === 'NEGATIVE',
  });
  return (
    <div className={`review ${reviewBackground}`}>
      <div className='review__top'>
        <div className='review__author'>
          <div className='review__avatar'>
            <img src={avatar} alt='' />
          </div>
          <h4 className='review__author-name'>{reviewAutor}</h4>
        </div>
        <p className='review__date'>{formatDate(reviewData)}</p>
      </div>
      <div className='review__body'>
        <h3 className='review__title'>{reviewTitle}</h3>
        <p
          className={`review__text ${isTextShort ? '' : 'review__text--full'}`}>
          {reviewDescription}
        </p>
        <button
          type='button'
          className={`review__more-btn ${
            isTextShort ? '' : 'review__more-btn--hidden'
          }`}
          onClick={showMoreReview}>
          показать всю рецензию
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
