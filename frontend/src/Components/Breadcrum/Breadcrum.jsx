import React from "react";
import "./Breadcrum.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <p><Link to="/">Home </Link></p>
      <FontAwesomeIcon className="b-icon" icon={faChevronRight} />
      <p><Link to="/cars">Cars</Link></p>
      <FontAwesomeIcon className="b-icon" icon={faChevronRight} />
      {/* <p><Link to={`/cars/${product.make}`}>{product.make}</Link></p>
      <FontAwesomeIcon className="b-icon" icon={faChevronRight} />
      <p><Link to={`/cars/${product.model}`}>{product.model}</Link></p>
      <FontAwesomeIcon className="b-icon" icon={faChevronRight} /> */}
      {/* <h5>{product.title}</h5> */}
    </div>
  );
};

export default Breadcrum;
