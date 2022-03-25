import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = ({ query, setQuery }) => {
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <Outlet />
    </>
  );
};

export default Layout;
