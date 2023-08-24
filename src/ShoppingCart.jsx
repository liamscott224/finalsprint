import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { cartItems, removeItem } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
