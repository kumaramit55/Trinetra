import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const getNavLinkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">
          Trinetra
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RxHamburgerMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/">
                Home
              </NavLink>
            </li>

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
                    IT Staffing Solution
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="consultation-audit">
                    Audit & Compliance Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="licensing">
                    Licensing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="payroll-and-operations">
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
                      <NavLink className="dropdown-item" to="recruitment/temp-staff">
                        Temporary Staff
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="recruitment/perm-staff">
                        Permanent Staff
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
                      <NavLink className="dropdown-item" to="contracting/blue-color">
                        Blue Color Staffing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="contracting/white-color">
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
              <NavLink className={getNavLinkClass} to="resources">
                Resources
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
      </div>
    </nav>
  );
};

export default Header;
