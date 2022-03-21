import '../../styles/global.scss';
import './App.scss';

import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import Home from '../../pages/Home/Home';
import MoviesList from '../MoviesList/MoviesList';

import store from '../../store/Store';
import { observer } from 'mobx-react-lite';
import Reviews from '../../pages/Reviews/Reviews';

const App = observer(() => {
  const [query, setQuery] = useState('');

  const moviesList =
    store.movies.length > 0 &&
    store.movies.map((movie) => {
      return (
        <Link
          className='app__link'
          to={`/movie/${movie.filmId}/`}
          key={movie.filmId}>
          <MovieCard key={movie.filmId} movie={movie} id={movie.filmId} />
        </Link>
      );
    });

  return (
    <div className='app'>
      <Header query={query} setQuery={setQuery} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/movies'
          element={<MoviesList moviesList={moviesList} />}
        />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/movie/:id/reviews' element={<Reviews />} />
      </Routes>
    </div>
  );
});

export default App;
