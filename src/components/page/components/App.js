import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../page/Home';
import About from '../page/About';
import Products from '../page/Products';
import Error from '../page/Error';
import SharedLayout from '../page/SharedLayout';
import SingleProducts from './SingleProducts';
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProducts />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
