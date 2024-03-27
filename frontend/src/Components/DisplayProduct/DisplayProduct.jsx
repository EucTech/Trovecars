import React from 'react';
import './DisplayProduct.css'

const DisplayProduct = (props) => {
    const {product} = props;
  return (
    <div className='displayproduct'>
      <img src={Object.values(product.images)[0]} alt="" />
      <img src={Object.values(product.images)[1]} alt="" />
      <img src={Object.values(product.images)[2]} alt="" />
      <p>{product.title}</p>
    </div>
  )
}

export default DisplayProduct
