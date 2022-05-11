import { Outlet } from 'react-router-dom';

import Navbar from '../pages/Navbar2';
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
