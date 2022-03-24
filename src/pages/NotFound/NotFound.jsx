import './NotFound.scss';
import notFound from '../../assets/images/404.png';
import notFound2 from '../../assets/images/page-not-found.png';

const NotFound = () => {
  return (
    <div className='p-404'>
      <div className='p-404__images'>
        <img src={notFound} alt='' draggable='false' />
        <img src={notFound2} alt='' />
      </div>
    </div>
  );
};

export default NotFound;
