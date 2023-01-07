import React from 'react';

import "./styles.css";

const Product = ({carrousel}) => {

  return (
    carrousel.map(product => {
      return (
      <div key={Math.random() * 100} className={`product my-5 m-md-5 d-flex flex-row justify-content-center align-items-center`}>
        <img src={product.img} alt={product.name} className="p-md-5 prodImg"/>
        <div className='text-start py-3 p-md-3 description d-flex flex-column justify-content-around'>
          <div>
            <h4 className='prodName'>{product.name}</h4>
            <p className='prodInfo'>{product.description}</p>
          </div>
          { product.award || product.logo ? 
            <div className='d-flex flex-row justify-content-between align-items-center'>
              { product.award ?
              <div>
                {product.award.map(text => {
                  return <p key={product.id++} className="prodAward text-start m-0">{text}</p>
                })}
              </div>
              : null }
              { product.logo ? 
              <img src={product.logo} alt={product.name} className="prodLogo align-self-center" />
              : null }
            </div>
          : null }
        </div>
      </div>
      )})
  )
}

export default Product