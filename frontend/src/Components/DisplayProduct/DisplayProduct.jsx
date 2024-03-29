import React, { useState } from 'react';
import './DisplayProduct.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const DisplayProduct = (props) => {
  const {product} = props;

  const [mainImage, setmainImage] = useState("image1");

  const displayImage = () => {

  }

  const allImage = Object.values(product.images);
  
  return (
    <div className='displayproduct'>
      <div className="displayproduct-left">
        <div className="displayproduct-left-images">
          <div className="displayproduct-main-image">
            <div className='main-image' style={{backgroundImage:`url(${Object.values(product.images)[0]})`}}></div>
          </div>
          <div className="displayproduct-images">
            <div className='sub-image' style={{backgroundImage:`url(${allImage.map})`}}></div>
            {/* <div className='sub-image' style={{backgroundImage:`url(${Object.values(product.images)[1]})`}}></div>
            <div className='sub-image' style={{backgroundImage:`url(${Object.values(product.images)[2]})`}}></div>
            <div className='sub-image' style={{backgroundImage:`url(${Object.values(product.images)[3]})`}}></div>
            <div className='sub-image' style={{backgroundImage:`url(${Object.values(product.images)[4]})`}}></div> */}
          </div>
        </div>
      </div>
      <div className="displayproduct-right">
        <h1>{product.title}</h1>
        <div className="displayproduct-right-info">
          <p>{product.year}</p>
          <FontAwesomeIcon className='dot-icon' icon={faCircleDot} />
          <p>{product.type}</p>
          <FontAwesomeIcon className='dot-icon' icon={faCircleDot} />
          <p>{product.fuel_type}</p>
        </div>
        <h2>&#x20a6;{product.price}</h2>
        <div className="displayproduct-right-all-info">
          <div><p>Make:</p><p>{product.make}</p></div>
          <div><p>Model:</p><p>{product.model}</p></div>
          <div><p>Drive Type:</p><p>{product.drive_type}</p></div>
          <div><p>Transmission:</p><p>{product.transmission}</p></div>
          <div><p>Condition:</p><p>{product.condition}</p></div>
          <div><p>Engine Size:</p><p>{product.engine_size}</p></div>
          <div><p>Doors:</p><p>{product.doors}</p></div>
          <div><p>Cylinders:</p><p>{product.cylinders}</p></div>
          <div><p>Color:</p><p>{product.color}</p></div>
          <div><p>Fuel Type:</p><p>{product.fuel_type}</p></div>
          <div><p>Vin:</p><p>{product.vin}</p></div>
        </div>
      </div>
    </div>
  )
}

export default DisplayProduct
