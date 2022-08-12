import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './index.css';

//? Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Auction from './pages/Auction';
import Cart from './pages/Cart';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:slug' element={<Shop />} />
        <Route path='/product' element={<Product />}/>
        <Route path='/deals' element={<Auction />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,

  document.getElementById('root')
);
