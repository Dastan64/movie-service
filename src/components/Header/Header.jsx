import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// import HeaderNav from '../HeaderNav/HeaderNav';

import './Header.scss';

const Header = ({ setIsPopupOpen }) => {
  function handleClick() {
    setIsPopupOpen(true);
  }
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <div className='header__container'>
          <div className='header__logo-container'>
            <Link to='/'>
              <img className='header__logo' src={logo} alt='' />
            </Link>
          </div>
          <div className='search'>
            <button type='button' className='search__btn' onClick={handleClick}>
              <svg
                className='search__btn-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'>
                <path
                  fill='#fff'
                  fillRule='evenodd'
                  d='M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z'></path>
              </svg>
              <span>Поиск</span>
            </button>
          </div>
          {/* <HeaderNav /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
