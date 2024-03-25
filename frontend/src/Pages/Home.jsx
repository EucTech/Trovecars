import React from "react";
import FeaturedListing from "../Components/FeaturedListing/FeaturedListing";
import Navbar from "../Components/Navbar/Navbar";
import Popular from "../Components/Popular/Popular";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <FeaturedListing />
      <Popular/>
    </div>
  );
};

export default Home;
