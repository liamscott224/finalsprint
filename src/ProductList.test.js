// ProductList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../ProductList'; // Import the component you want to test

test('renders product list correctly', () => {
  const { getByText } = render(<ProductList />);

  // Test if the component renders the correct content
  const product1 = getByText('Product 1 - 10.99');
  const product2 = getByText('Product 2 - 19.99');

  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();
});
