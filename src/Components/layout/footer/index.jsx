import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" text-light ">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Trinetra Foundation</h5>
            <p className="small">
              Registered under Trinetra Foundation. Committed to delivering quality manpower and compliance solutions that empower businesses sustainably.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Follow Us</h5>
           <div>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="text-light me-3 fs-4"
  >
    <FaTwitter />
  </a>
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-light me-3 fs-4"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-light me-3 fs-4"
  >
    <FaLinkedinIn />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-light fs-4"
  >
    <FaInstagram />
  </a>
</div>

          </div>
        </div>

        <div className="text-center pt-3 border-top border-secondary small">
          © {new Date().getFullYear()} Trinetra Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
