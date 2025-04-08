// src/pages/Home.js
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        <h1 className="display-4 fw-bold">Welcome to Styleverse</h1>
        <p className="lead">Your go-to destination for premium men’s summerwear.</p>
        <img 
          src="../images/flat lay fashion.webp" 
          alt="Flat-lay fashion"
          className="img-fluid rounded my-4"
        />
        <a href="/shop" className="btn btn-dark btn-lg">Shop Now</a>
      </div>

      <Footer />
    </>
  );
};

export default Home;

