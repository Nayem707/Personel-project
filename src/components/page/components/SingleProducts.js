import { Link, useParams } from 'react-router-dom';
import products from '../page/data';
import { Button } from 'react-bootstrap';

const SingleProducts = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <section className='section'>
      <div>
        <img src={image} alt={name} />
        <h3>This a new Product</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas
          explicabo, sint accusamus odio officiis repellendus impedit eos optio
          tenetur voluptates quidem libero laborum unde commodi. Asperiores quam
          fugiat nemo.
        </p>
      </div>
      <div>
        <Link to='/products'>
          <Button className='btn'>Back</Button>
        </Link>
      </div>
    </section>
  );
};

export default SingleProducts;
