import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import NavbarComponent from './components/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';









function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavbarComponent /> } />
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        
       
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

      </Routes>
    </Router>
  );
}



export default App;


