import { Routes, Route, Link } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Profile from '../pages/Profile';

function HeaderNav() {
  return (
    <>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <Link to='/' className='header__link'>
              Ссылка 1
            </Link>
          </li>
          <li className='header__list-item'>
            <Link to='/about' className='header__link'>
              Ссылка 2
            </Link>
          </li>
          <li className='header__list-item'>
            <Link to='/contact' className='header__link'>
              Ссылка 3
            </Link>
          </li>
          <li className='header__list-item'>
            <Link to='/profile' className='header__link'>
              Ссылка 4
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default HeaderNav;
