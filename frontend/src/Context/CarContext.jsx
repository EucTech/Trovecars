import React, { createContext, useEffect, useState } from "react";
// import all_product from '../Components/Assets/all_products';

export const CarContext = createContext(null);

const CarContextProvider = (props) => {
  const [all_product, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/api/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const contextValue = { all_product };
  return (
    <CarContext.Provider value={contextValue}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
