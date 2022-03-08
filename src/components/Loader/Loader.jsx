import loader from '../../assets/images/loader.svg';
import './Loader.scss';

function Loader() {
  return (
    <div className='loader'>
      <img src={loader} alt='' className='loader__image' />
    </div>
  );
}

export default Loader;
