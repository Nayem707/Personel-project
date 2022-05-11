import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={
          (({ isActive }) => (isActive ? 'link active' : 'link'),
          'btn btn-outline-info')
        }
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={
          (({ isActive }) => (isActive ? 'link active' : 'link'),
          'btn btn-outline-info')
        }
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={
          (({ isActive }) => (isActive ? 'link active' : 'link'),
          'btn btn-outline-info')
        }
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
