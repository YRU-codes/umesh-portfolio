import { useState } from "react";
import logo from "../../../public/Images/Logo.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", icon: "pi pi-home", id: "home", path: "/" },
  { label: "Project", icon: "pi pi-folder", id: "project", path: "/project" },
  { label: "About", icon: "pi pi-user", id: "about", path: "/about" },
];

const Sidebar = ({ isOpen, toggle }) => {
  // Local state removed, using props now

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""} flex justify-col gap4`}>
      <div className="sidebar-header">
        <div className="logo-container">
           {isOpen && <span className="logo-text">Portfolio</span>}
        </div>

        <button
          className="toggle-btn"
          type="button"
          onClick={toggle}
        >
          <i className={`pi ${isOpen ? "pi-angle-left" : "pi-bars"}`} style={{ fontSize: '1.2rem' }}></i>
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`}
              >
                <i className={item.icon} style={{ fontSize: '1.2rem' }}></i>
                {isOpen && <span className="nav-label">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
