import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h3>Error Page</h3>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </section>
  );
};

export default Error;
