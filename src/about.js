import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">About Styleverse</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead">
              Styleverse is built for modern men who want to look sharp and feel comfortable all summer long. From laid-back beachwear to elevated casuals, we curate fashion that fits your lifestyle.
            </p>
            <img 
              src="../images/about styleverse.webp" 
              alt="About Styleverse" 
              className="img-fluid rounded mt-4"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

