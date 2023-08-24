// ShoppingCartContext.js
import React, { createContext, useContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (item) => {
    // Logic to add an item to the cart
  };

  const removeItem = (itemId) => {
    // Logic to remove an item from the cart
  };

  const contextValue = {
    cartItems,
    totalAmount,
    addItem,
    removeItem,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};