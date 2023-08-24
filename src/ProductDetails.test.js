import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ProductDetails from '../ProductDetails';

// Mocking getProductById directly within the mock
jest.mock('../api', () => ({
  __esModule: true,
  getProductById: jest.fn(() =>
    Promise.resolve({
      id: 1,
      name: 'Mock Product',
      description: 'Mock Product Description',
      price: 100,
    })
  ),
}));

describe('ProductDetails', () => {
  it('renders product details correctly', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText('Product Details')).toBeInTheDocument();
      expect(getByText('Mock Product')).toBeInTheDocument();
      expect(getByText('Mock Product Description')).toBeInTheDocument();
      expect(getByText('Price: 100')).toBeInTheDocument();
    });
  });

  it('handles product fetching error', async () => {
    // Mocking getProductById to simulate an error
    jest.spyOn(require('../api'), 'getProductById').mockRejectedValue(new Error('API error'));

    const { getByText } = render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText('Error fetching product details:')).toBeInTheDocument();
    });
  });

  it('displays loading message while fetching product details', async () => {
    // Mocking getProductById to have a slight delay
    jest.spyOn(require('../api'), 'getProductById').mockImplementation(() =>
      new Promise(resolve =>
        setTimeout(() =>
          resolve({
            id: 1,
            name: 'Mock Product',
            description: 'Mock Product Description',
            price: 100,
          }),
          500
        )
      )
    );

    const { getByText } = render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </MemoryRouter>
    );

    expect(getByText('Loading product details...')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText('Mock Product')).toBeInTheDocument();
      expect(getByText('Mock Product Description')).toBeInTheDocument();
      expect(getByText('Price: 100')).toBeInTheDocument();
    });
  });
});

