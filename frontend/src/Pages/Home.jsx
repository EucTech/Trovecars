import React from "react";
import FeaturedListing from "../Components/FeaturedListing/FeaturedListing";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <FeaturedListing />
    </div>
  );
};

export default Home;
