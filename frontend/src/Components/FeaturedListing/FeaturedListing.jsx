import React, { useEffect, useState } from "react";
import "./FeaturedListing.css";
import { Button } from "@material-tailwind/react";
// import all_products from "../Assets/all_products";
import Items from "../Items/Items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ItemsLoader from "../ItemsLoader";

const FeaturedListing = () => {
  const [carCondition, setCarCondition] = useState("New");

  const [all_products, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    console.log(error);
  }

  // Loading state
  if (loading) {
    return <ItemsLoader />;
  }

  if (error) {
    console.log("error");
  }

  const filterCondition = all_products.filter(
    (item) => item.condition === carCondition
  );

  return (
    <div className="featuredlisting">
      <div className="featuredlisting-header">
        <h1>Featured Listings</h1>
        <div className="featuredlisting-new-used">
          <Button
            className={`featuredlisting-btn ${
              carCondition === "New" ? "fl-btn-active" : ""
            }`}
            onClick={() => setCarCondition("New")}
          >
            New
          </Button>
          <Button
            className={`featuredlisting-btn ${
              carCondition === "Used" ? "fl-btn-active" : ""
            }`}
            onClick={() => setCarCondition("Used")}
          >
            Used
          </Button>
        </div>
      </div>
      {filterCondition.length ?
      <div className="featuredlisting-main">
        <div className="featuredlisting-main-left">
          <Link to={`/product/${filterCondition[0].id}`}>
            <div
              className="featuredlisting-left-img-section"
              key={filterCondition[0].id}
              id={filterCondition[0].id}
            >
              <div
                className="featuredlisting-left-image"
                style={{
                  backgroundImage: `url(${filterCondition[0].images[0]})`,
                }}
              ></div>
              <div className="featuredlisting-left-numberof-images">
                <FontAwesomeIcon className="image-icon" icon={faImages} />
                <p>{filterCondition[0].images.length}</p>
              </div>
            </div>
            <div className="featuredlisting-left-info">
              <h4>{filterCondition[0].title}</h4>
              <hr />
              <div className="featuredlisting-tran">
                <div className="featured-type">
                  <Button className="featured-btn">
                    {filterCondition[0].year}
                  </Button>
                  <h5>{filterCondition[0].transmission}</h5>
                  <h5 className="fuel-type">{filterCondition[0].fuel_type}</h5>
                  <h5 className="drive-type">
                    {filterCondition[0].drive_type}
                  </h5>
                </div>
                <div className="featured-price">
                  <h3>&#x20a6;{filterCondition[0].price}</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="featuredlisting-main-right">
          {filterCondition.slice(1, 5).map((item, i) => {
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
        </div>
      </div> : "No Featured Listing"}
    </div>
  );
};

export default FeaturedListing;
