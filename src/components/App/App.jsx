import '../../styles/global.scss';
import './App.scss';

import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import Home from '../../pages/Home/Home';
import MoviesList from '../MoviesList/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  function getMovies(query) {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.REACT_APP_API_KEY,
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

  const moviesList =
    movies.length > 0 &&
    movies.map((movie) => {
      return (
        <Link to={`/movie/${movie.filmId}`} key={movie.filmId}>
          <MovieCard key={movie.filmId} movie={movie} id={movie.filmId} />
        </Link>
      );
    });

  return (
    <div className='app'>
      <Header
        setMovies={setMovies}
        query={query}
        setQuery={setQuery}
        getMovies={getMovies}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/movies'
          element={<MoviesList moviesList={moviesList} />}
        />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
