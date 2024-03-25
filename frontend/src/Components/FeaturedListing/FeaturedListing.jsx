import React from "react";
import "./FeaturedListing.css";
import { Button } from "@material-tailwind/react";
import all_products from "../Assets/all_products";
import Items from "../Items/Items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const FeaturedListing = () => {
  return (
    <div className="featuredlisting">
      <div className="featuredlisting-header">
        <h1>Featured Listings</h1>
        <div className="featuredlisting-new-used">
          <Button className="featuredlisting-btn fl-btn-active">New</Button>
          <Button className="featuredlisting-btn">Used</Button>
        </div>
      </div>
      <div className="featuredlisting-main">
        <div className="featuredlisting-main-left">
          <div
            className="featuredlisting-left-img-section"
            key={all_products[0].id}
            id={all_products[0].id}
          >
            <div
              className="featuredlisting-left-image"
              style={{
                backgroundImage: `url(${
                  Object.values(all_products[0].images)[0]
                })`,
              }}
            ></div>
            <div className="featuredlisting-left-numberof-images">
              <FontAwesomeIcon className="image-icon" icon={faImages} />
              <p>{Object.values(all_products[0].images).length}</p>
            </div>
          </div>
          <div className="featuredlisting-left-info">
            <h4>{all_products[0].title}</h4>
            <hr />
            <div className="featuredlisting-tran">
              <div className="featured-type">
                <Button className="featured-btn">{all_products[0].year}</Button>
                <h5>{all_products[0].transmission}</h5>
                <h5 className="fuel-type">{all_products[0].fuel_type}</h5>
                <h5 className="drive-type">{all_products[0].drive_type}</h5>
              </div>
              <div className="featured-price">
                <h3>&#x20a6;{all_products[0].price}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredlisting-main-right">
          {all_products.slice(1, 4).map((item, i) => {
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
      </div>
    </div>
  );
};

export default FeaturedListing;
