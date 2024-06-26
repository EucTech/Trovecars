import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Hero from "../Hero/Hero";
import "../Global_css.css";
import { Link } from "react-router-dom";

// import all_products from "../Assets/all_products";

const Navbar = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowFixedNavbar(true);
    } else {
      setShowFixedNavbar(false);
    }
  };

  // Force reload the page
  const handleRefresh = () => {
    window.reload(true);
    window.scrollTo(0, 0);
  };

  // scroll to the top page
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // nav menu
  const [menu, setMenu] = useState("null");

  // nav useRef
  const navRef = useRef();

  // navbar open
  const navOpen = (e) => {
    navRef.current.classList.add("open");
    e.target.classList.add("open");
  };

  // navbar close
  const navClose = (e) => {
    navRef.current.classList.remove("open");
    e.target.classList.remove("open");
  };

  return (
    <div className="navbar">
      <div className="background-image"></div>
      <nav className={`navbar-static ${showFixedNavbar ? "hide" : ""}`}>
        <Link style={{ textDecoration: "none" }} to="/" onClick={handleRefresh}>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="nav-links">
          <ul>
            <ul className="navbar-hr">
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={handleRefresh}
              >
                <li
                  onMouseOver={() => setMenu("home")}
                  onMouseOut={() => setMenu(null)}
                >
                  {menu === "home" ? <hr /> : <></>}
                  <span style={{ marginBottom: menu !== "home" ? 0 : 20 }}>
                    Home
                  </span>
                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="cars" onClick={handleScrollToTop}>
                <li
                  onMouseOver={() => setMenu("car")}
                  onMouseOut={() => setMenu(null)}
                >
                  {menu === "car" ? <hr /> : <></>}
                  <span style={{ marginBottom: menu !== "car" ? 0 : 20 }}>
                    Cars
                  </span>
                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="seller" onClick={handleScrollToTop}>
                <li
                  onMouseOver={() => setMenu("seller")}
                  onMouseOut={() => setMenu(null)}
                >
                  {menu === "seller" ? <hr /> : <></>}
                  <span style={{ marginBottom: menu !== "seller" ? 0 : 20 }}>
                    Sell Your Car
                  </span>
                </li>
              </Link>
            </ul>
            <Link style={{ textDecoration: "none" }} to="signup" onClick={handleScrollToTop}>
              <div className="register">
                <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
                <li>Register</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="account" onClick={handleScrollToTop}>
              <div className="user-account">
                <FontAwesomeIcon icon={faUser} className="account-icon" />
              </div>
            </Link>
          </ul>
        </div>
      </nav>

      <nav className={`navbar-fixed ${showFixedNavbar ? "show" : ""}`}>
        <Link style={{ textDecoration: "none" }} to="/" onClick={handleRefresh}>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="nav-links">
          <ul>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={handleRefresh}
            >
              <li>Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/cars" onClick={handleScrollToTop}>
              <li>Cars</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/seller" onClick={handleScrollToTop}>
              <li>Sell Your Car</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/signup" onClick={handleScrollToTop}>
              <div className="register">
                <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
                <li>Register</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/account" onClick={handleScrollToTop}>
              <div className="user-account">
                <FontAwesomeIcon icon={faUser} className="account-icon" />
              </div>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="navbar-small-screen">
        <div>
          <FontAwesomeIcon
            onClick={navOpen}
            icon={faBars}
            className="bar-icon"
          />
        </div>
        <Link style={{ textDecoration: "none" }} to="/" onClick={handleRefresh}>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/account" onClick={handleScrollToTop}>
          <div className="user-account">
            <FontAwesomeIcon icon={faUser} className="account-icon" />
          </div>
        </Link>
        <div ref={navRef} className="small-screen-nav-links ">
          <div className="sm-image-icon">
            <Link style={{ textDecoration: "none" }} to="/" onClick={handleRefresh}>
              <div className="sm-nav-logo">
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="close-bar">
              <FontAwesomeIcon
                onClick={navClose}
                icon={faSquareXmark}
                className="close-bar-icon"
              />
            </div>
          </div>
          <ul>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={handleRefresh}
            >
              <li>Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/cars" onClick={handleScrollToTop}>
              <li>Cars</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/seller" onClick={handleScrollToTop}>
              <li>Sell Your Car</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/signup" onClick={handleScrollToTop}>
              <div className="register">
                <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
                <li>Register</li>
              </div>
            </Link>
          </ul>
          <div className="nav-support">
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              &nbsp;&nbsp;support@trovecars.com
            </p>
          </div>
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default Navbar;
