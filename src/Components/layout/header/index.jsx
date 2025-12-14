import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo_2.png";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);

  const toggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/">
                Home
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                style={{ color: "white", textDecoration: "none" }}
                onClick={toggleServices}
                aria-expanded={isServicesOpen}
              >
                Services
              </button>

              <ul className={`dropdown-menu${isServicesOpen ? " show" : ""}`}>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/it-staffing-solutions"
                    onClick={closeDropdown}
                  >
                    IT Staffing Solution
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/contracting"
                    onClick={closeDropdown}
                  >
                    Contractual Staffing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/consultation-audit"
                    onClick={closeDropdown}
                  >
                    Audit & Compliance Services
                  </NavLink>
                </li>

                

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/payroll-and-operations"
                    onClick={closeDropdown}
                  >
                    Payroll and Operation
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/recruitment"
                    onClick={closeDropdown}
                  >
                    Recruitment
                  </NavLink>
                </li>

                
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/job-opportunities">
                Job Opportunity
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/about-us">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/talk-to-us">
                Talk to Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
