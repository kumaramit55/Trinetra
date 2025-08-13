import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../../elements/dropdown";

const navLinks = [
  {
    title: "Staffing",
    path: "/staffing",
    children: [
      { path: "it-staffing-solutions", title: "IT Staffing Solution" },
      { path: "payroll-and-operations", title: "Payroll and Operation" },
        { path: "/staffing/opt2", title: "Contract Staffing Solution" },
      { path: "/staffing/opt2", title: "Complinace Services" },
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
  {
    title: "About Us",
    path: "/about-us", // Simple link
  },
  {
    title: "Talk To Us",
    path: "/talk-to-us", // Simple link
  },
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

const Navbar = () => {
  return (
    <div className="header-container">
      <p>Logo</p>
      <ul className="nav-item-container">
        {navLinks.map((link, idx) =>
          link.children && link.children.length > 0 ? (
            <Dropdown
              key={`${idx}-${link.title}`}
              label={link.title}
              path={link.path}
              items={link.children}
            />
          ) : (
            <li key={`${idx}-${link.title}`} className="nav-item">
              <NavLink to={link.path} className="nav-link">
                {link.title}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
