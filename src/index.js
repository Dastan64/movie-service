import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Store from './store/Store';

export const StoreContext = createContext();

ReactDOM.render(

  <BrowserRouter>
    <ScrollToTop>
      <StoreContext.Provider value={new Store()}>
        <App />
      </StoreContext.Provider>
    </ScrollToTop>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
