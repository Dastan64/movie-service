import { Link } from 'react-router-dom';
import titleArrow from '../../assets/images/title-arrow--white.svg';
import './LinkHeading.scss';

const LinkHeading = ({ url, text }) => {
  return (
    <Link to={url} className='link'>
      <h2 className='link__heading'>
        {text}
        <img className='link__icon' src={titleArrow} alt='' />
      </h2>
    </Link>
  );
};

export default LinkHeading;
