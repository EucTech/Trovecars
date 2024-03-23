import React from "react";
import "./FeaturedListing.css";
import { Button } from "@material-tailwind/react";
import all_products from "../Assets/all_products";
import Items from "../Items/Items";

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
        <div className="featuredlisting-main-right">
              <Items
                key={all_products[0].id}
                id={all_products[0].id}
                title={all_products[0].title}
                year={all_products[0].year}
                transmission={all_products[0].transmission}
                fuel_type={all_products[0].fuel_type}
                price={all_products[0].price}
                images={Object.values(all_products[0].images)[0]}
                numberOfImages={Object.values(all_products[0].images).length}
              />
        </div>
        <div className="featuredlisting-main-left">
          {all_products.map((item, i) => {
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
