import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './api';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching product details for productId:', productId);

    getProductById(productId)
      .then(response => {
        console.log('Fetched product:', response);
        setProduct(response);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(error.message);
      });
  }, [productId]);

  console.log('Rendering component with productId:', productId);

  return (
    <div>
      <h2>Product Details</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        product ? (
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ) : (
          <p>Loading product details...</p>
        )
      )}
    </div>
  );
};

export default ProductDetails;

