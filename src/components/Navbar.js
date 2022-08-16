import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbars.css";

// Define pages for to display in navigation bar
const pages = [
  { name: "Home", path: "/#" },
  { name: "Explore", path: "/explore" },
  { name: "Stats", path: "/stats" },
  { name: "Resources", path: "/resources" },
  { name: "Artist", path: "/artist" },
  { name: "Create", path: "/create" },
];

const Navbar = () => {
  const [click, setclick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            color="white"
            onClick={closeMobileMenu}
          >
            TRVL
            <i className="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {pages.map((page) => (
              <li className="nav-item" key={page.name}>
                <Link
                  className="nav-links"
                  to={page.path}
                  underline="none"
                  key={pages.indexOf(page)}
                  onClick={closeMobileMenu}
                >
                  {page.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--color">Connect wallet</Button>}
        </div>
      </nav>
    </>
  );
};
export { Navbar };
