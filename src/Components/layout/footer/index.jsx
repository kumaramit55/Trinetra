import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient bg-dark text-light  mt-5">
      <div className="container">
        <div className="row align-items-start gy-4">
          
          {/* Brand & About */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Your Company Name</h5>
            <p className="mb-3" style={{ lineHeight: '1.8', fontSize: '15px' }}>
              Empowering your business with modern web solutions. We specialize in professional, responsive, and engaging websites tailored to help businesses grow online.
            </p>
            <div>
              <a href="https://facebook.com" className="btn btn-outline-light btn-sm rounded-pill me-2" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="btn btn-outline-light btn-sm rounded-pill me-2" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="btn btn-outline-light btn-sm rounded-pill" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          
          {/* Useful Links */}
          <div className="col-lg-2 col-md-3">
            <h6 className="text-uppercase fw-semibold mb-3">Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="col-lg-3 col-md-3">
            <h6 className="text-uppercase fw-semibold mb-3">Subscribe</h6>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control form-control-sm bg-dark text-light border-secondary"
                  placeholder="Your email"
                  aria-label="Your email"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm w-100 rounded-pill">
                Subscribe
              </button>
            </form>
          </div>

          {/* Address & Contact */}
          <div className="col-lg-3 col-md-12">
            <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-geo-alt me-1"></i> 123 Business Street, City, Country</li>
              <li className="mb-2"><i className="bi bi-envelope me-1"></i> info@yourcompany.com</li>
              <li><i className="bi bi-telephone me-1"></i> +91-1234567890</li>
            </ul>
          </div>
        </div>

        <hr className="border-light opacity-25 my-4" />

        <div className="row">
          <div className="col text-center">
            <small className="text-secondary">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
