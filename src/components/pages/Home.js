import { Link } from 'react-router-dom';
// import Navbar from './StyledNavbar';
const Home = () => {
  return (
    <>
      <section className='section'>
        <h2>Home Page</h2>
        <Link to='/' className='btn'>
          Back
        </Link>
      </section>
    </>
  );
};
export default Home;
