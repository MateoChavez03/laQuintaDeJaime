import React from 'react'
import products from './products.js'
import Product from '../Product'
import "./styles.css"

const ProductCarrousel = ({category}) => {
  let carrousel = products.filter(product => product.category === category.toLowerCase());

  return (
      carrousel ?
        <div className='text-start p-0 ger carrousel'>
          <h4 className='ms-3 ms-md-5 mt-3 mt-md-5 prod-category'>{category}</h4>
          <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>
            <Product carrousel={carrousel}/>
          </div>
        </div>
      : null 
  )
}

export default ProductCarrousel