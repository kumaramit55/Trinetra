import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo_2.png"

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    staffing: false,
    recruitment: false,
    contracting: false,
  });

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
   
  };

  
  const navRef = useRef(null);
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      navRef.current && (
        !navRef.current.contains(event.target) ||            // Click outside navbar
        (navRef.current.contains(event.target) &&            // OR click inside navbar but
         !event.target.closest(".dropdown-menu") &&           // NOT inside dropdown menu
         !event.target.closest(".dropdown-toggle"))           // AND NOT on dropdown toggle button
      )
    ) {
      setDropdownOpen({
        staffing: false,
        recruitment: false,
        contracting: false,
      });
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);



  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg">
     
    
        <div>
           <NavLink className="navbar-brand text-white" to="/">
        <img src={logo} alt="" className="logo" />
        </NavLink>
        </div>
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

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                style={{ color: "white", textDecoration: "none" }}
                onClick={(e) => toggleDropdown("staffing", e)}
                aria-expanded={dropdownOpen.staffing}
              >
                Staffing
              </button>
              <ul
                className={`dropdown-menu${
                  dropdownOpen.staffing ? " show" : ""
                }`}
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="it-staffing-solutions"
                    onClick={(e) =>
                      setDropdownOpen(
                        {
                          staffing: false,
                          recruitment: false,
                          contracting: false,
                        },
                        e
                      )
                    }
                  >
                    IT Staffing Solution
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="consultation-audit"
                    onClick={() =>
                      setDropdownOpen({
                        staffing: false,
                        recruitment: false,
                        contracting: false,
                      })
                    }
                  >
                    Audit & Compliance Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="licensing"
                    onClick={() =>
                      setDropdownOpen({
                        staffing: false,
                        recruitment: false,
                        contracting: false,
                      })
                    }
                  >
                    Licensing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="payroll-and-operations"
                    onClick={() =>
                      setDropdownOpen({
                        staffing: false,
                        recruitment: false,
                        contracting: false,
                      })
                    }
                  >
                    Payroll and Operation
                  </NavLink>
                </li>

                <li className="dropdown-submenu dropend">
                  <button
                    className="dropdown-item dropdown-toggle"
                    type="button"
                    onClick={(e) => {
                    
                      toggleDropdown("recruitment", e);
                    }}
                    aria-expanded={dropdownOpen.recruitment}
                  >
                    Recruitment
                  </button>
                  <ul
                    className={`dropdown-menu${
                      dropdownOpen.recruitment ? " show" : ""
                    }`}
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="recruitment/temp-staff"
                        onClick={(e) =>
                          setDropdownOpen({
                            staffing: false,
                            recruitment: false,
                            contracting: false,
                          },e)
                        }
                      >
                        Temporary Staff
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="recruitment/perm-staff"
                        onClick={(e) =>
                          setDropdownOpen({
                            staffing: false,
                            recruitment: false,
                            contracting: false,
                          },e)
                        }
                      >
                        Permanent Staff
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu dropend">
                  <button
                    className="dropdown-item dropdown-toggle"
                    type="button"
                    onClick={(e) => toggleDropdown("contracting",e)}
                    aria-expanded={dropdownOpen.contracting}
                  >
                    Contracting Staff
                  </button>
                  <ul
                    className={`dropdown-menu${
                      dropdownOpen.contracting ? " show" : ""}`}
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="contracting/blue-color"
                        onClick={(e) =>
                          setDropdownOpen({
                            staffing: false,
                            recruitment: false,
                            contracting: false,
                          },e)
                        }
                      >
                        Blue Color Staffing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="contracting/white-color"
                        onClick={(e) =>
                          setDropdownOpen({
                            staffing: false,
                            recruitment: false,
                            contracting: false,
                          },e)
                        }
                      >
                        White Color Staffing
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="job-opportunities">
                Job Opportunity
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="about-us">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="talk-to-us">
                Talk to Us
              </NavLink>
            </li>
          </ul>
        </div>
    
    </nav>
  );
};

export default Header;
