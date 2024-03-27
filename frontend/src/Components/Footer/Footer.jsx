import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {

   // Force reload the page
   const handleRefresh = () => {
    window.reload(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-links">
          <ul>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={handleRefresh}
            >
              <li>Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/cars">
              <li>Cars</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/seller">
              <li>Sell Your Car</li>
            </Link>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-info">
          <h1>
            (234) <span>913456783</span>
          </h1>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            &nbsp;&nbsp;support@trovecars.com
          </p>
          <div className="footer-address">
            <h4>122 Dubai Estate</h4>
            <h4>Anambra State, Nigeria</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
