import React, { useContext } from "react";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './CSS/CarSearch.css'
import { Select, Option } from "@material-tailwind/react";
import { CarContext } from "../Context/CarContext";

const CarSearch = () => {

  const { all_product } = useContext(CarContext);

  return (
    <div className="carsearch">
      <MainNavbar />
      <div className="car-breadcrum">
        <h5>
          <Link to="/">Home </Link>
        </h5>
        <FontAwesomeIcon className="b-icon" icon={faChevronRight} />
        <p>Search-Cars</p>
      </div>

      <div className="car-search-section">
        <Select className="car-select" color="orange" label="Make">
          {all_product.map((product, index) => (
            <Option key={index} >{product.make}</Option>
          ))}
        </Select>
        <Select className="car-select" color="orange" label="Model">
          {all_product.map((product, index) => (
            <Option key={index}>{product.model}</Option>
          ))}
        </Select>
        <Select className="car-select" color="orange" label="Makes">
          {all_product.map((product, index) => (
            <Option key={index}>{product.type}</Option>
          ))}
        </Select>
        <Select className="car-select" color="orange" label="Drive Type">
          {all_product.map((product, index) => (
            <Option key={index}>{product.drive_type}</Option>
          ))}
        </Select>
        <Select className="car-select" color="orange" label="Fuel Type">
          {all_product.map((product, index) => (
            <Option key={index}>{product.fuel_type}</Option>
          ))}
        </Select>
      </div>
      <h4>Clear all</h4>
    </div>
  );
};

export default CarSearch;
