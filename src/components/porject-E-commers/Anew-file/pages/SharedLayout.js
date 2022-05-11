import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyleNavbar from '../pages/StyledNavbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <StyleNavbar />
      <Outlet />
    </>
  );
};
export default Home;
