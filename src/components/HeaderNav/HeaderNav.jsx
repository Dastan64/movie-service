import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <a href='https://www.google.kz' className='header__link'>
              Ссылка 1
            </a>
          </li>
          <li className='header__list-item'>
            <Link to='/movies' className='header__link'>
              Ссылка 2
            </Link>
          </li>
          <li className='header__list-item'>
            <a href='https://www.google.kz' className='header__link'>
              Ссылка 3
            </a>
          </li>
          <li className='header__list-item'>
            <a href='https://www.google.kz' className='header__link'>
              Ссылка 4
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
