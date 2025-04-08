import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import Navbar from './navbar';
import Footer from './footer';

const Cart = () => {
  const { cartItems, clearCart, total } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="mb-4 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name}
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
            <div className="text-end">
              <button className="btn btn-danger mt-3" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;

