import counter from '../../store/counter';
import './HeaderSearch.scss';

function HeaderSearch({ query, setQuery, getMovies }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      alert('Пустой запрос');
      return;
    }
    counter.getMovies(query);
  }
  return (
    <form className='header__search-container search' onSubmit={handleSubmit}>
      <input
        type='text'
        name='search-field'
        id='search'
        className='search__input'
        placeholder='Введите название...'
        autoComplete='on'
        onInput={(e) => setQuery(e.target.value.trim())}
      />
      <button type='submit' className='search__btn'>
        <svg
          className='search__btn-icon'
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'>
          <path
            fill='#000'
            fillRule='evenodd'
            d='M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z'></path>
        </svg>
        Найти
      </button>
    </form>
  );
}

export default HeaderSearch;
