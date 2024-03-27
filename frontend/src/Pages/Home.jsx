import React from "react";
import FeaturedListing from "../Components/FeaturedListing/FeaturedListing";
import Navbar from "../Components/Navbar/Navbar";
import Popular from "../Components/Popular/Popular";
import Newsletter from "../Components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <FeaturedListing />
      <Popular/>
      <Newsletter/>
    </div>
  );
};

export default Home;
