// import React from 'react'

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <NavLink to={"/Home"} className="navbar-brand" >
            React Users
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={"/Home"} className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/About"} className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/Contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink to={"/AddUser"} className="btn border border-white">Add User</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
