import React from "react";
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
// import dropdown_icon from '../Assets/dropdown_icon.png'

const Hero = () => {
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
              <Option value="audi">Audi (20)</Option>
              <Option value="bmw">BMW (10)</Option>
              <Option value="ford">Ford (3)</Option>
              <Option value="mercedes-benz">Mercedes-Benz (5)</Option>
              <Option value="bentley">Bentley (9)</Option>
              <Option value="cadillac">Cadillac (4)</Option>
              <Option value="chevrolet">Chevrolet (15)</Option>
              <Option value="ferrari">Ferrari (40)</Option>
              <Option value="porsche">Porsche (23)</Option>
            </Select>
            <Select
              name="model"
              className="car-price-selector"
              color="blue"
              label="All Models"
            >
              <Option>A1</Option>
              <Option>A2</Option>
              <Option>A3</Option>
            </Select>
            <Select
              name="price"
              className="car-price-selector"
              color="blue"
              label="Max Price"
            >
              <Option>$22,000</Option>
              <Option>$300,000</Option>
            </Select>
          </div>
          <div className="car-selector-search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="car-search-icon"
            />
            <Button className="car-search-btn">Search &nbsp;&nbsp; <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass}></FontAwesomeIcon> </Button>
          </div>
        </div>
      </div>

      <div className="hero-car-type">
        <div className="car-type">
          <div className="car-icon">
            <img src={sedan_car} alt="" />
          </div>
          <p>Sedan</p>
        </div>
        <div className="car-type">
          <div className="car-icon">
            <img src={suv_car} alt="" />
          </div>
          <p>SUV</p>
        </div>
        <div className="car-type">
          <div className="car-icon">
            <img src={hatchback_car} alt="" />
          </div>
          <p>Hatchback</p>
        </div>
        <div className="car-type">
          <div className="car-icon">
            <img src={convertible_car} alt="" />
          </div>
          <p>Convertible</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
