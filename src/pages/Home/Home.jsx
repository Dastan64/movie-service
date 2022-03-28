import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import Popup from '../../components/Popup/Popup';
import Top100 from '../../components/Top100/Top100';
import Top250 from '../../components/Top250/Top250';
import TopAwaited from '../../components/TopAwaited/TopAwaited';
import Store from '../../store/Store';
import './Home.scss';

const Home = ({ isPopupOpen, setIsPopupOpen, query, setQuery }) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    Store.getMovies(query);
    navigate('/movies');
    setIsPopupOpen(false);
  }

  function handleClose() {
    setIsPopupOpen(!isPopupOpen);
  }
  return (
    <section className='home'>
      <Top250 />
      <Top100 />
      <TopAwaited />
      <Popup isPopupOpen={isPopupOpen}>
        <h2 className='popup__heading'>Поиск</h2>
        <form className='popup__form form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='form__input'
            placeholder='Хочу найти фильм...'
            onChange={handleChange}
            ref={searchInputRef}
          />
          <button className='form__submit-btn'>
            <svg
              className='form__submit-btn-icon'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'>
              <path
                fill='rgba(31,27,46,.16)'
                fillRule='evenodd'
                d='M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z'></path>
            </svg>
          </button>
        </form>
        <button
          className='popup__close-btn'
          type='button'
          onClick={handleClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 72 72'
            id='emoji'>
            <g id='color' />
            <g id='hair' />
            <g id='skin' />
            <g id='skin-shadow' />
            <g id='line'>
              <line
                x1='17.5'
                x2='54.5'
                y1='17.5'
                y2='54.5'
                fill='#fff'
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
              />
              <line
                x1='54.5'
                x2='17.5'
                y1='17.5'
                y2='54.5'
                fill='#fff'
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
              />
            </g>
          </svg>
        </button>
      </Popup>
    </section>
  );
};

export default Home;
