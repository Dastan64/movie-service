import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Store from './store/Store';

export const StoreContext = createContext();

ReactDOM.render(

  <HashRouter>
    <ScrollToTop>
      <StoreContext.Provider value={new Store()}>
        <App />
      </StoreContext.Provider>
    </ScrollToTop>
  </HashRouter>
  ,
  document.getElementById('root')
);
