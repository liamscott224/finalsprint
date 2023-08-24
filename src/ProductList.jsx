import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from './api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link> - {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;




