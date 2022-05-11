import { Link } from 'react-router-dom';
import products from '../page/data';
import { Button, Card } from 'react-bootstrap';

const Products = () => {
  return (
    <section className='section'>
      <h1>My Products</h1>

      <div className='row'>
        {products.map((product) => {
          return (
            <div className='d-flex'>
              <article key={product.id}>
                <Card>
                  <Card.Body>
                    <Card.Img variant='top' src={product.image} />
                    <Card.Title>
                      <h3>{product.name}</h3>
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Link to={`/products/${product.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
