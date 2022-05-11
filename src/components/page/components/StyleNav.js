import { NavLink } from 'react-router-dom';
import { FaHome, FaSearchLocation } from 'react-icons/fa';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

const Naavbar = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' className=''>
        <Container fluid>
          <Navbar.Brand href='#'>
            <FaSearchLocation /> Home Page
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <ul class='navbar-nav me-auto'>
              <li class='nav-item'>
                <NavLink
                  to='/'
                  className='btn'
                  style={({ isActive }) => {
                    return { color: isActive ? 'white' : 'black' };
                  }}
                >
                  <FaHome /> Home
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink
                  to='/about'
                  className='btn'
                  style={({ isActive }) => {
                    return { color: isActive ? '#aaa' : 'red' };
                  }}
                >
                  About
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink
                  to='/products'
                  className='btn'
                  style={({ isActive }) => {
                    return { color: isActive ? '#aaa' : 'white' };
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink
                  to='/login'
                  className='btn'
                  style={({ isActive }) => {
                    return { color: isActive ? '#aaa' : 'white' };
                  }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Naavbar;
