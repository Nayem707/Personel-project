import { Navbar } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav>
      <Navbar>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='header'></div>
    </nav>
  );
};

export default Navbar;
