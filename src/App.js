import './styles/global.scss';
import './styles/app.scss';

import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  function getMovies(query) {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'b8387e62-1761-4aed-9e6d-e4befe9217da',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.films);
        setMovies(data.films);
      });
  }
  const moviesList = movies.map((movie) => {
    return <MovieCard key={movie.filmId} movie={movie} />;
  });
  return (
    <div className='app'>
      <Header
        setMovies={setMovies}
        query={query}
        setQuery={setQuery}
        getMovies={getMovies}
      />
      <div className='app__grid grid'>{moviesList}</div>
    </div>
  );
}

export default App;
