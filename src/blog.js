// src/pages/Blog.js
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';


const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="text-center mb-4">Our Blog</h2>
        <div className="row">

          {/* Blog 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="../images/blog/1.webp" alt="Top 5 Summer Styling Tips" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Top 5 Summer Styling Tips</h5>
                <p className="card-text">
                  Keep your summer look light and breathable with these effortless style moves.
                </p>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="../images/blog/2.webp" alt="Packing Right for Your Getaway" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Packing Right for Your Getaway</h5>
                <p className="card-text">
                  Everything you need in your bag for a perfect beach trip.
                </p>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="../images/blog/3.webp" alt="From Beach to Evening Look" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">From Beach to Evening Look</h5>
                <p className="card-text">
                  How to transition your outfit seamlessly from day to night.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;

