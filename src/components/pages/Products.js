import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>Products Page</h2>
        <Link to='/' className='btn'>
          Home Page
        </Link>
      </section>
    </>
  );
};

export default Products;
