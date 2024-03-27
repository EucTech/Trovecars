import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>Cars</li>
            <li>Sell Your Car</li>
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
