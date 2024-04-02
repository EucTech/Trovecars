import React from "react";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import "./CSS/Seller.css";

const Seller = () => {
  return (
    <div className="seller">
      <MainNavbar />
      <div className="seller-main">
        <h1>Upload Cars</h1>

        <form action="">
          <div className="seller-title">
            <h4>
              Listing Title <span>*</span>
            </h4>
            <input type="text" name="title" placeholder="Enter title here" />
          </div>
          <div className="seller-all">
            <div>
              <h4>
                Condition <span>*</span>
              </h4>
              <select name="condition" >
                
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Seller;
