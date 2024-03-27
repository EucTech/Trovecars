import React, { useContext } from "react";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import DisplayProduct from "../Components/DisplayProduct/DisplayProduct";
import { CarContext } from "../Context/CarContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(CarContext);
  const { productId } = useParams();
  const product = all_product.find(
    (product) => product.id === Number(productId)
  );
  return (
    <div>
      <Breadcrum product={product}/>
      <DisplayProduct product={product}/>
    </div>
  );
};

export default Product;
