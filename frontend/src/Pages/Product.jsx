import React, { useContext } from "react";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import DisplayProduct from "../Components/DisplayProduct/DisplayProduct";
import { CarContext } from "../Context/CarContext";
import { useParams } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar/MainNavbar";

const Product = () => {
  const { all_product } = useContext(CarContext);
  const { productId } = useParams();
  const product = all_product.find(
    (product) => product.id === Number(productId)
  );
  
  if (!product) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  return (
    <div>
      <MainNavbar/>
      <Breadcrum product={product}/>
      <DisplayProduct product={product}/>
    </div>
  );
};

export default Product;
