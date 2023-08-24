import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShoppingCartContext } from '../ShoppingCartContext';
import ShoppingCart from '../ShoppingCart';

describe('ShoppingCart', () => {
  it('renders shopping cart items correctly', () => {
    const cartItems = [
      { id: 1, name: 'Product 1', quantity: 2 },
      { id: 2, name: 'Product 2', quantity: 1 },
    ];

    const { getByText } = render(
      <ShoppingCartContext.Provider value={{ cartItems }}>
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    );

    expect(getByText('Shopping Cart')).toBeInTheDocument();
    expect(getByText('Product 1 - 2')).toBeInTheDocument();
    expect(getByText('Product 2 - 1')).toBeInTheDocument();
  });

  it('calls removeItem when "Remove" button is clicked', () => {
    const cartItems = [{ id: 1, name: 'Product 1', quantity: 1 }];
    const removeItemMock = jest.fn();

    const { getByText } = render(
      <ShoppingCartContext.Provider value={{ cartItems, removeItem: removeItemMock }}>
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    );

    const removeButton = getByText('Remove');
    fireEvent.click(removeButton);

    expect(removeItemMock).toHaveBeenCalledWith(1);
  });
});
