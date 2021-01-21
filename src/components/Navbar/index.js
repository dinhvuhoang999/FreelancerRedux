/* eslint-disable */

//Put this comment ath the top of the file
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './style.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        href="ad"
        className="navbar-brand"
        onClick={scrollToTop}
      >
      START BOOTSTRAP
      </a>
      {open ? (
        <button
          onClick={() => setOpen(!open)}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MENU
          <span className="navbar-toggler-icon" />
        </button>
      )
        : (
          <button
            onClick={() => setOpen(!open)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            MENU
            <span className="navbar-toggler-icon" />
          </button>
        )}
      {open ? (
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            <Link
              activeClass="active"
              to="PORTFOLIO"
              spy
              smooth
              duration={1000}
            >
              <li className="nav-item">
                <p>PORTFOLIO</p>
              </li>
            </Link>

            <li className="nav-item">
              <a className="nav-link" href="#ABOUT">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#CONTACT">CONTACT</a>
            </li>
          </ul>
        </div>
      )
        : (
          <div className="navbar-collapse collapse show" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Link
                activeClass="active"
                to="PORTFOLIO"
                spy
                smooth
                duration={1000}
              >
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link" href="123">PORTFOLIO</a>
                </li>
              </Link>
              <Link
                activeClass="active"
                to="ABOUT"
                spy
                smooth
                duration={1000}
              >
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link" href="#ABOUT">ABOUT</a>
                </li>
              </Link>
              <Link
                activeClass="active"
                to="CONTACT"
                spy={true}
                smooth
                duration={1000}
              >
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link" href="#CONTACT">CONTACT</a>
                </li>
              </Link>
            </ul>
          </div>
        )}
    </nav>
  );
};
export default Navbar;
