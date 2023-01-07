import React from 'react';
import ProductCarrousel from '../../components/ProductCarrousel';

import "./styles.css";

const Products = () => {
  return (
    <main className='row text-start products'>
      <h2 className='p-3 pt-5 p-md-5 geor'><span className='prod-span'>Exquisito </span><br /> sabor, aroma y calidad.</h2>
      <p className='px-3 px-md-5 mb-5 ger prod-intro'>Con entusiasmo y dedicación en cada uno de los pasos de la elaboración, hemos desarrollado una gran variedad de sabores de licores totalmente artesanales, sin el agregado de conservantes, aditivos, esencias ni colorantes artificiales. Trabajamos con materia prima cuidadosamente seleccionada y de excelente calidad, que mediante un método de elaboración tradicional, nos permite obtener una bebida con una textura muy particular, donde se entrelazan delicadamente aroma y sabor auténticos en cada variedad.</p>
      <h3 className='px-3 px-md-5 my-md-5 geor'>Catálogo</h3>
      <ProductCarrousel category={"Frutales citricos"} />
      <ProductCarrousel category={"Frutos regionales"} />
      <ProductCarrousel category={"Naturales"} />
      <ProductCarrousel category={"Clasicos"} />
      <ProductCarrousel category={"Cremas de chocolate"} />
      <ProductCarrousel category={"De vino"} />
      <ProductCarrousel category={"De Crema"} />
    </main>
  )
}

export default Products