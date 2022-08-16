// import react components
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import local components
import "./navBar.css";
import { Button } from "./Button";

// Define pages for to display in navigation bar
const pages = [
  { name: "Home", path: "/#" },
  { name: "Explore", path: "/explore" },
  { name: "Stats", path: "/stats" },
  { name: "Resources", path: "/resources" },
  { name: "Artist", path: "/artist" },
  { name: "Create", path: "/create" },
];

const ResponsiveTopNavigation = (props) => {
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
    <nav id="navbar">
      <div id="navbar-container" width="851px" height="96px">
        <Link
          to="/"
          className="navbar-logo"
          // color="white"
          onClick={closeMobileMenu}
        >
          <img src="/images/logo.png" alt="Logo" width={138} height={66} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul
          id={click ? "nav-menu active" : "nav-menu"}
          width="446px"
          height="24px"
        >
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
        {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        {/* <button id="connectWallet">Connect Wallet</button> */}
      </div>
    </nav>
  );
};
export { ResponsiveTopNavigation };
