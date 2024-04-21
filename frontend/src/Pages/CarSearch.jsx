import React, { useContext, useEffect, useState } from "react";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./CSS/CarSearch.css";
import { Select, Option } from "@material-tailwind/react";
import { CarContext } from "../Context/CarContext";
import "../Components/Items/Items";
import Items from "../Components/Items/Items";
import { IconButton, Typography } from "@material-tailwind/react";

const CarSearch = () => {
  const { all_product } = useContext(CarContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get("type");

  const [currentPage, setCurrentPage] = useState(1);
  const [conditionFilter, setConditionFilter] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState(typeParam || "");
  const [driveTypeFilter, setDriveTypeFilter] = useState("");
  const [fuelTypeFilter, setFuelTypeFilter] = useState("");

  useEffect(() => {
    setTypeFilter(typeParam || "");
  }, [typeParam]);

  if (!all_product) {
    return (<>Loading............</>)
  }


  const filteredItems = all_product.filter((item) => {
    const matchCondition =
      conditionFilter === "" || item.condition === conditionFilter;
    const matchMake = makeFilter === "" || item.make === makeFilter;
    const matchModel = modelFilter === "" || item.model === modelFilter;
    const matchType = typeFilter === "" || item.type === typeFilter;
    const matchDriveType =
      driveTypeFilter === "" || item.drive_type === driveTypeFilter;
    const matchFuelType =
      fuelTypeFilter === "" || item.fuel_type === fuelTypeFilter;

    return (
      matchCondition &&
      matchMake &&
      matchModel &&
      matchType &&
      matchDriveType &&
      matchFuelType
    );
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const filteredNewItems = filteredItems.filter(
    (item) => item.condition === "New"
  );
  const filteredUsedItems = filteredItems.filter(
    (item) => item.condition === "Used"
  );

  const newItemsCount = filteredNewItems.length;
  const usedItemsCount = filteredUsedItems.length;

  const scrollToTop = () => {
    const element = document.getElementById("car-search-section");
    if (element) {
      element.scrollIntoView();
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    scrollToTop();
  };

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

      <div className="car-search-main">
        <div className="car-search-section" id="car-search-section">
          <Select
            className="car-select"
            color="orange"
            label="Make"
            value={makeFilter}
            onChange={(value) => setMakeFilter(value)}
          >
            {Array.from(
              new Set(all_product.map((product) => product.make))
            ).map((make, index) => (
              <Option key={index} value={make}>
                {make}
              </Option>
            ))}
          </Select>
          <Select
            className="car-select"
            color="orange"
            label="Model"
            value={modelFilter}
            onChange={(value) => setModelFilter(value)}
          >
            {Array.from(
              new Set(
                all_product
                  .filter((product) => product.make === makeFilter)
                  .map((product) => product.model)
              )
            ).map((model, index) => (
              <Option key={index} value={model}>
                {model}
              </Option>
            ))}
          </Select>
          <Select
            className="car-select"
            color="orange"
            label="Type"
            value={typeFilter}
            onChange={(value) => setTypeFilter(value)}
          >
            {Array.from(
              new Set(all_product.map((product) => product.type))
            ).map((type, index) => (
              <Option key={index} value={type}>
                {type}
              </Option>
            ))}
          </Select>
          <Select
            className="car-select"
            color="orange"
            label="Drive Type"
            value={driveTypeFilter}
            onChange={(value) => setDriveTypeFilter(value)}
          >
            {Array.from(
              new Set(all_product.map((product) => product.drive_type))
            ).map((drive_type, index) => (
              <Option key={index} value={drive_type}>
                {drive_type}
              </Option>
            ))}
          </Select>
          <Select
            className="car-select"
            color="orange"
            label="Fuel Type"
            value={fuelTypeFilter}
            onChange={(value) => setFuelTypeFilter(value)}
          >
            {Array.from(
              new Set(all_product.map((product) => product.fuel_type))
            ).map((fuel_type, index) => (
              <Option key={index} value={fuel_type}>
                {fuel_type}
              </Option>
            ))}
          </Select>
        </div>
        <h4 onClick={() => setMakeFilter("")}>Clear all</h4>
        <div className="car-all-new-used" id="car-all-new-used">
          <div
            onClick={() => setConditionFilter("")}
            className={`${conditionFilter === "" ? "car-active" : ""}`}
          >
            <h1>All</h1>
            <p>({filteredItems.length})</p>
          </div>
          <div
            onClick={() => setConditionFilter("New")}
            className={`${conditionFilter === "New" ? "car-active" : ""}`}
          >
            <h1>New</h1>
            <p>({newItemsCount})</p>
          </div>
          <div
            onClick={() => setConditionFilter("Used")}
            className={`${conditionFilter === "Used" ? "car-active" : ""}`}
          >
            <h1>Used</h1>
            <p>({usedItemsCount})</p>
          </div>
        </div>
      </div>
      <div className="car-list">
        <h1>{filteredItems.length} Results</h1>
        <div className="car-list-items">
          {currentItems.map((item, i) => {
            return (
              <Items
                key={i}
                id={item.id}
                title={item.title}
                year={item.year}
                transmission={item.transmission}
                fuel_type={item.fuel_type}
                price={item.price}
                images={Object.values(item.images)[0]}
                numberOfImages={Object.values(item.images).length}
              />
            );
          })}
        </div>

        <div className="pagination">
          <div className="flex items-center main gap-8">
            <IconButton
              size="sm"
              variant="outlined"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </IconButton>
            <Typography color="gray" className="font-normal">
              Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
              <strong className="text-gray-900">{totalPages}</strong>
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
