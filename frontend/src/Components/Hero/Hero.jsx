import React, { useContext } from "react";
import "./Hero.css";
import "../Global_css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import sedan_car from "../Assets/sedan_car.png";
import suv_car from "../Assets/suv_car.png";
import hatchback_car from "../Assets/hatchback_car.png";
import convertible_car from "../Assets/convertible_car.png";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { CarContext } from "../../Context/CarContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { all_product } = useContext(CarContext);
  return (
    <div className="hero">
      <div className="hero-header">
        <h1>
          Find Your <span>Perfact</span> Car
        </h1>
      </div>
      <div className="hero-car-section">
        <div className="hero-car-section-head">
          <h4>All</h4>
          <h4>New</h4>
          <h4>Used</h4>
        </div>
        <div className="select-car">
          <div className="hero-car-selector">
            <Select
              name="make"
              className="car-price-selector"
              color="blue"
              label="All Makes"
            >
              {all_product.map((product, index) => (
                <Option key={index}>{product.make}</Option>
              ))}
            </Select>
            <Select
              name="model"
              className="car-price-selector"
              color="blue"
              label="All Models"
            >
              {all_product.map((product, index) => (
                <Option key={index}>{product.model}</Option>
              ))}
            </Select>
            <Select
              name="price"
              className="car-price-selector"
              color="blue"
              label="Max Price"
            >
              {all_product.map((product, index) => (
                <Option key={index}>{product.price}</Option>
              ))}
            </Select>
          </div>
          <div className="car-selector-search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="car-search-icon"
            />
            <Button className="car-search-btn">
              Search &nbsp;&nbsp;{" "}
              <FontAwesomeIcon
                className="search-icon"
                icon={faMagnifyingGlass}
              ></FontAwesomeIcon>{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="hero-car-type">
        <Link to="/cars?type=Sedan">
          <div className="car-type">
            <div className="car-icon">
              <img src={sedan_car} alt="" />
            </div>
            <p>Sedan</p>
          </div>
        </Link>
        <Link to="/cars?type=SUV">
          <div className="car-type">
            <div className="car-icon">
              <img src={suv_car} alt="" />
            </div>
            <p>SUV</p>
          </div>
        </Link>
        <Link to="/cars?type=Hatchback">
          <div className="car-type">
            <div className="car-icon">
              <img src={hatchback_car} alt="" />
            </div>
            <p>Hatchback</p>
          </div>
        </Link>
        <Link to="/cars?type=Convertible">
          <div className="car-type">
            <div className="car-icon">
              <img src={convertible_car} alt="" />
            </div>
            <p>Convertible</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
