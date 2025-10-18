import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className=" text-light py-4 ">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Trinetra Foundation</h5>
            <p className="small">
              Registered under Trinetra Foundation. Committed to delivering
              quality manpower and compliance solutions that empower businesses
              sustainably.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink
                  to="/about-us"
                  className="text-light text-decoration-none"
                >
                  About Us
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/talk-to-us"
                  className="text-light text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="text-light text-decoration-none"
                >
                  Privacy Policy
                </NavLink>
              </li>
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
