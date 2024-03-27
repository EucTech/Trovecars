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

  // nav menu
  const [menu, setMenu] = useState("null");

  // nav useRef
  const navRef = useRef()

  // navbar open
  const navOpen = (e) => {
    navRef.current.classList.add('open');
    e.target.classList.add('open');
  }

  // navbar close
  const navClose = (e) => {
    navRef.current.classList.remove('open');
    e.target.classList.remove('open');
  }



  return (
    <div className="navbar">
      <div className="background-image"></div>
      <nav className={`navbar-static ${showFixedNavbar ? "hide" : ""}`}>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <ul className="navbar-hr">
              <li
                onMouseOver={() => setMenu("home")}
                onMouseOut={() => setMenu(null)}
              >
                {menu === "home" ? <hr /> : <></>}
                <span style={{ marginBottom: menu !== "home" ? 0 : 20 }}>
                  Home
                </span>
              </li>
              <li
                onMouseOver={() => setMenu("car")}
                onMouseOut={() => setMenu(null)}
              >
                {menu === "car" ? <hr /> : <></>}
                <span style={{ marginBottom: menu !== "car" ? 0 : 20 }}>
                  Cars
                </span>
              </li>
              <li
                onMouseOver={() => setMenu("seller")}
                onMouseOut={() => setMenu(null)}
              >
                {menu === "seller" ? <hr /> : <></>}
                <span style={{ marginBottom: menu !== "seller" ? 0 : 20 }}>
                  Sell Your Car
                </span>
              </li>
            </ul>
            <div className="register">
              <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
              <li>Register</li>
            </div>
            <div className="user-account">
              <FontAwesomeIcon icon={faUser} className="account-icon" />
            </div>
          </ul>
        </div>
      </nav>

      <nav className={`navbar-fixed ${showFixedNavbar ? "show" : ""}`}>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>Cars</li>
            <li>Sell Your Car</li>
            <div className="register">
              <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
              <li>Register</li>
            </div>
            <div className="user-account">
              <FontAwesomeIcon icon={faUser} className="account-icon" />
            </div>
          </ul>
        </div>
      </nav>

      <div className="navbar-small-screen">
        <div>
          <FontAwesomeIcon onClick={navOpen} icon={faBars} className="bar-icon" />
        </div>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="user-account">
          <FontAwesomeIcon icon={faUser} className="account-icon" />
        </div>
        <div ref={navRef} className="small-screen-nav-links ">
          <div className="sm-image-icon">
            <div className="sm-nav-logo">
              <img src={logo} alt="" />
            </div>
            <div className="close-bar">
              <FontAwesomeIcon onClick={navClose} icon={faSquareXmark} className="close-bar-icon"/>
            </div>
          </div>
          <ul>
            <li>Home</li>
            <li>Cars</li>
            <li>Sell Your Car</li>
            <div className="register">
              <FontAwesomeIcon icon={faUserPlus} className="register-icon" />
              <li>Register</li>
            </div>
          </ul>
          <div className="nav-support">
            <p><span><FontAwesomeIcon icon={faEnvelope} /></span>&nbsp;&nbsp;support@trovecars.com</p>
          </div>
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default Navbar;
