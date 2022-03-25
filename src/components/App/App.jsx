import '../../styles/global.scss';
import './App.scss';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//Components
import MovieDetail from '../MovieDetail/MovieDetail';
import MoviesList from '../MoviesList/MoviesList';
import Layout from '../Layout/Layout';

import store from '../../store/Store';
import { observer } from 'mobx-react-lite';

//Pages
import Home from '../../pages/Home/Home';
import Reviews from '../../pages/Reviews/Reviews';
import Top250Movies from '../../pages/Top250Movies/Top250Movies';
import NotFound from '../../pages/NotFound/NotFound';
import Top100PopularMovies from '../../pages/Top100PopularMovies/Top100PopularMovies';

const App = observer(() => {
  const [query, setQuery] = useState('');

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout query={query} setQuery={setQuery} />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<MoviesList movies={store.movies} />} />
          <Route path='movie/:id' element={<MovieDetail />} />
          <Route path='movie/:id/reviews' element={<Reviews />} />
        </Route>
        <Route path='/top-250-movies' element={<Top250Movies />} />
        <Route
          path='/top-100-popular-movies'
          element={<Top100PopularMovies />}
        />
        {/* <Route path='/movies/top250' element={<Top250Movies />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
});

export default App;
