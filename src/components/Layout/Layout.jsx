import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = ({ setIsPopupOpen }) => {
  return (
    <>
      <Header setIsPopupOpen={setIsPopupOpen} />
      <Outlet />
    </>
  );
};

export default Layout;
