import Cards from './Bootsrap/Card';
import Acordin from './Bootsrap/Acordin';
import Cart from './Cart';

const Home = () => {
  return (
    <>
      <section className='section'>
        <div>
          <Cards />
          <Cart />
          <Acordin />
        </div>
      </section>
    </>
  );
};

export default Home;
