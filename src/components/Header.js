import logo from '../assets/images/logo.png';
import HeaderNav from './HeaderNav';

import '../styles/header.scss';

function Header() {
  return (
    <div class='header'>
      <div class='header__wrapper'>
        <div class='header__container'>
          <div class='header__logo-container'>
            <img className='header__logo' src={logo} alt='' />
          </div>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
