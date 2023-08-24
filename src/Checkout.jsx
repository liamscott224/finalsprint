import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(ShoppingCartContext);

  const handleCheckout = () => {
    // Handle the checkout process (e.g., payment, order submission)
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Amount: {totalAmount}</p>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
