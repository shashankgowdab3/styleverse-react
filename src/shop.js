import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import Navbar from './navbar';
import Footer from './footer';
import products from './products';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="mb-4 text-center">Shop Men's Summerwear</h2>
        <div className="row">
          {products.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <button 
                    className="btn btn-dark"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;


