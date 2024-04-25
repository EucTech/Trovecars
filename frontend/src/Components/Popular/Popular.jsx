import React, { useEffect, useState } from "react";
import "./Popular.css";
import { Button } from "@material-tailwind/react";
// import all_products from "../Assets/all_products";
import Items from "../Items/Items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ItemsLoader from "../ItemsLoader";

const Popular = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [makeFilter, setMakeFilter] = useState("Audi");
  const [all_products, setAllProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/allProducts");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAllProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Error handling
  if (error) {
    console.log(error)
  }

  // Loading state
  if (loading) {
    return <ItemsLoader/>
  
  }

  
  const itemsPerPage = 4
  const totalPages = Math.ceil(all_products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredItems = all_products.filter(
    (item) => item.make === makeFilter
  );
  
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const filterByMake = (make) => {
    setMakeFilter(make);
    setCurrentPage(1);
  };

  return (
    <div className="popular">
      <div className="popular-header">
        <h1>Popular Makes</h1>
        <div className="popular-cars">
          <Button className={`popular-btn ${makeFilter === "Audi" ? "popular-btn-active" : ""}`}
          onClick={() => filterByMake("Audi")}>
            <h4>Audi</h4>
            <p>{all_products.filter((product) => product.make === "Audi").length} Listings</p>
          </Button>
          <Button className={`popular-btn ${makeFilter === "BMW" ? "popular-btn-active" : ""}`}
          onClick={() => filterByMake("BMW")}>
            <h4>BMW</h4>
            <p>{all_products.filter((product) => product.make === "BMW").length} Listings</p>
          </Button>
          <Button className={`popular-btn ${makeFilter === "Ferrari" ? "popular-btn-active" : ""}`}
          onClick={() => filterByMake("Ferrari")}>
            <h4>Ferrari</h4>
            <p>{all_products.filter((product) => product.make === "Ferrari").length} Listings</p>
          </Button>
          <Button className={`popular-btn ${makeFilter === "Ford" ? "popular-btn-active" : ""}`}
          onClick={() => filterByMake("Ford")}>
            <h4>Ford</h4>
            <p>{all_products.filter((product) => product.make === "Ford").length} Listings</p>
          </Button>
      
        </div>
      </div>
      {currentItems ? 
      <div className="popular-items">
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
              images={item.images[0]}
              numberOfImages={item.images.length}
            />
          );
        })}
      </div> : "No Popular Listings" }
      <div className="popular-next-prev">
        <div className="popular-icon">
          <FontAwesomeIcon className="p-icon" icon={faArrowLeft} onClick={prevPage} />
          <FontAwesomeIcon className="p-icon" icon={faArrowRight} onClick={nextPage} />
        </div>
        <div className="popular-view-make">
            <Button className="p-btn">View {filteredItems.length} {makeFilter}</Button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
