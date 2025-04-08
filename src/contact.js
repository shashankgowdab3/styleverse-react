import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

