import 'swiper/scss';
import 'swiper/css/navigation';
import './Similars.scss';
import titleArrow from '../../assets/images/title-arrow.svg';
import MoviesSlider from '../MoviesSlider/MoviesSlider';

const SimilarsList = ({ similars }) => {
  return (
    <section className='more__similars similars'>
      <h2 className='similars__title'>
        Если вам понравился этот фильм{' '}
        <span className='similars__number'>{similars.length}</span>
        <img className='similars__icon' src={titleArrow} alt='' />
      </h2>
      <MoviesSlider movies={similars} />
    </section>
  );
};

export default SimilarsList;
