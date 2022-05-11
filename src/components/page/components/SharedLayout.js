import { Link, Outlet } from 'react-router-dom';

import StyleNav from '../page/StyleNav';

const Home = () => {
  return (
    <>
      <StyleNav />
      <Outlet />
    </>
  );
};

export default Home;
