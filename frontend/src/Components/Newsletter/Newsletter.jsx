import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Newsletter</h2>
      <div className="newsletter-input">
        <input type="text" name="newletter" placeholder="Enter Your Email" />
        <input type="submit" />
      </div>
      <div>
      <p>Subscribe to our newsletter and stay updated with our offer</p>
      </div>
    </div>
  );
};

export default Newsletter;
