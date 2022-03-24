import '../../styles/global.scss';
import './App.scss';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import MoviesList from '../MoviesList/MoviesList';

import store from '../../store/Store';
import { observer } from 'mobx-react-lite';
import Reviews from '../../pages/Reviews/Reviews';
import Top250Movies from '../../pages/Top250Movies/Top250Movies';

const App = observer(() => {
  const [query, setQuery] = useState('');

  return (
    <div className='app'>
      <Header query={query} setQuery={setQuery} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesList movies={store.movies} />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/movie/:id/reviews' element={<Reviews />} />
        <Route path='/movies/top250' element={<Top250Movies />} />
      </Routes>
    </div>
  );
});

export default App;
