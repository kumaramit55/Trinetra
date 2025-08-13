import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ label, path, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <li className="nav-item dropdown" ref={dropdownRef} style={{ position: "relative" }}>
      <button
        className="nav-link dropdown-toggle"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        type="button"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {label}
      </button>
      {isOpen && (
        <ul
          className="dropdown-menu"
          style={{
            position: "absolute",
            top: "100%",
            width:'auto',
            left: 0,
            backgroundColor: "white",
            border: "1px solid rgba(0,0,0,.15)",
            zIndex: 1000,
            display: "block"
          }}
        >
          {items.map((item, idx) => (
            <li key={idx}>
              <NavLink className="dropdown-item" to={item.path} onClick={() => setIsOpen(false)}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
