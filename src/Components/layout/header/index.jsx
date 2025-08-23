import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHamburger } from "react-icons/fa";

const navLinks = [
  {
    title: "Staffing",
    path: "/staffing",
    children: [
      { path: "it-staffing-solutions", title: "IT Staffing Solution" },
      { path: "payroll-and-operations", title: "Payroll and Operation" },
      { path: "/staffing/opt2", title: "Contract Staffing Solution" },
      { path: "/staffing/opt2", title: "Compliance Services" },
    ],
  },
  {
    title: "e-Library",
    path: "/elibrary",
    children: [
      { path: "/elibrary/opt1", title: "e-Library Option 1" },
      { path: "/elibrary/opt2", title: "e-Library Option 2" },
    ],
  },
  { title: "About Us", path: "/about-us" },
  { title: "Talk To Us", path: "/talkto-us" },
  {
    title: "Job Opportunity",
    path: "/job-opportunity",
    children: [
      { path: "/job-opportunity/opt", title: "Job Opportunity 1" },
      { path: "/job-opportunity/opt1", title: "Job Opportunity 2" },
      { path: "/job-opportunity/opt2", title: "Job Opportunity 3" },
    ],
  },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="">
          Trinetra
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RxHamburgerMenu className="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4  ">
            <li className="nav-item ">
              <NavLink className="nav-link active" aria-current="page" to="">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item ">
              <NavLink className="nav-link active" aria-current="page" to="softaware-solution">
                Software Solutions
              </NavLink>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                Staffing
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="it-staffing-solutions">
                    {" "}
                    IT Staffing Solution
                  </NavLink>
                </li>
                 <li>
                  <NavLink className="dropdown-item" to="consultation-audit">
                    {" "}
                    Aduit & Compliance Sevices
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="licensing">
                    {" "}
                    Licensing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="payroll-and-operations"
                  >
                    Payroll and Operation
                  </NavLink>
                </li>
                <li className="dropdown-submenu">
                  <NavLink
                    to="recruitment"
                    className="dropdown-item dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Recruitment
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/recruitment/temp-staff"
                      >
                        Temporary Staff
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/recruitment/perm-staff"
                      >
                        Permanent Staff
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/contracting/apprenticeship"
                      >
                        Apprenticeship Programs
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <NavLink
                    to="contracting"
                    className="dropdown-item dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contracting Staff
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/contracting/blue-color"
                      >
                        Blue Color Staffing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/contracting/white-color"
                      >
                        White Color Staffing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/contracting/apprenticeship"
                      >
                        Gray Color Staffing
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul></ul>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="jobOpportunities">
                Job Oppurnity
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                e-Library
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link " to="about-us">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="talkto-us">
                Talk to us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
