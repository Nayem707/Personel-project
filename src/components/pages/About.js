import { Link } from 'react-router-dom';

function About() {
  return (
    <section className='section'>
      <h2>About Page</h2>
      <Link to='/' className='btn'>
        Home page
      </Link>
    </section>
  );
}

export default About;
