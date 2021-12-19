import logo from '../assets/images/logo.png';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';

import '../styles/Header.scss';

function Header({ getMovies, query, setQuery }) {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <div className='header__container'>
          <div className='header__logo-container'>
            <a href='https://www.kinopoisk.ru' target='_blank' rel='noreferrer'>
              <img className='header__logo' src={logo} alt='' />
            </a>
          </div>
          <HeaderSearch
            query={query}
            setQuery={setQuery}
            getMovies={getMovies}
          />
          <HeaderNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
