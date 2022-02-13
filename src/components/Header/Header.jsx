import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import HeaderNav from '../HeaderNav';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

import './Header.scss';

function Header({ getMovies, query, setQuery }) {
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <div className='header__container'>
          <div className='header__logo-container'>
            <Link to='/'>
              <img className='header__logo' src={logo} alt='' />
            </Link>
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
