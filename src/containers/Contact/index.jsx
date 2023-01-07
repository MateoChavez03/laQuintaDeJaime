import React, {useEffect, useState} from 'react';
import Form from '../../components/Form';
import Location from '../../components/Location';

import "./styles.css";

const Contact = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <main className='row'>
      <Location />
      <Form size={windowSize}/>
      <section className='contactSection d-flex flex-column flex-md-row align-items-center my-5 ger'>
        <div className='col text-center text-md-start'>
          <p>Familia Pelegrina - Adaro</p>
          <a className='mb-2' href="https://goo.gl/maps/EJRSKT1L4td9zF1y5">Belgrano s/n Jaime Prats San Rafael C.P. 5623 Mendoza.</a>
          <a className='my-2' href="mailto:laquintadejaime@gmail.com">laquintadejaime@gmail.com</a>
          <p className='mt-4'>Teléfono: 2625 495011 <br></br> Celular: 2625 523023</p>
        </div>
        <div className='col text-end d-flex flex-column align-items-center align-items-md-end'>
          {windowSize < 768 &&
          <h4 className='geor'>Búscanos en nuestras redes sociales</h4>
          }
          <a className='my-3' href="https://www.facebook.com/profile.php?id=100088221063634">La quinta de Jaime - Licores<img className='ms-3' src="assets/img/logos/faceLogoBrown.png" alt="Logo de Facebook"/></a>
          <a className='my-3' href="https://instagram.com/laquintadejaime?igshid=YmMyMTA2M2Y=">@laquintadejaime<img className='ms-3' src="assets/img/logos/igLogoBrown.png" alt="Logo de Instagram"/>
          </a>
          <a className='my-3' href="https://wa.me/+5492625523023" rel="noreferrer" target="_blank">2625 523023<img className='ms-3' src="assets/img/logos/wspLogoBrown.png" alt="Logo de Whatsapp"/></a>
        </div>
      </section>
    </main>
  )
}

export default Contact