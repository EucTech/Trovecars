import React, { createContext } from "react";
import all_product from '../Components/Assets/all_products';

export const CarContext = createContext(null);

const CarContextProvider = (props) => {
    const contextValue = { all_product };
    return (
        <CarContext.Provider value={contextValue}>
            {props.children}
        </CarContext.Provider>
    );
};

export default CarContextProvider;