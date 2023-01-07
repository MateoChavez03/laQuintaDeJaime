import React from 'react';

import "./styles.css";

const Form = ({size}) => {
  return (
    <form className='col d-flex flex-column justify-content-between align-items-center text-start mx-4 mt-5 p-0 form ger'>
      {size < 767 &&  
      <h4 className='geor mb-5'>Envíanos tu consulta</h4>
      }
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap'>
        <div className='mb-5'>
          <label htmlFor="name" className='mb-2'>Nombre</label>
          <input className='d-block formInput' type="text" name="name" id="name" required/>
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='mb-2'>Email</label>
          <input className='d-block formInput' type="email" name="email" id="email" required/>
        </div>
        <div className='mb-5'>
          <label htmlFor="phone" className='mb-2'>Teléfono</label>
          <input className='d-block formInput' type="number" name="phone" id="phone" required/>
        </div>
        <div className='mb-5'>
          <label htmlFor="postalCode" className='mb-2'>Código postal</label>
          <input className='d-block formInput' type="number" name="postalCode" id="postalCode" required/>
        </div>
      </div>
      <div className='mb-5 col-12'>
        <label className='mb-2' htmlFor="message">Mensaje</label>
        <textarea className='formTextarea' name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <button className='formBtn p-2' type='submit'>
        Enviar
      </button>
    </form>
  )
}

export default Form