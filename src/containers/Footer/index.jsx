import React, {useEffect, useState} from 'react';

import "./styles.css";

const Footer = () => {

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
    <footer className='row d-flex align-items-center flex-column justify-content-center flex-lg-row'>
      <p className='col-9 text-center text-lg-start title geor m-0'>La Quinta de Jaime <span className='ms-lg-5 ger'> 
      {windowSize < 1023 && <br/>} Beber con moderación. Prohibida su venta a menores de 18 años.</span></p>
      {windowSize > 1023 ?
        <p className='col-3 text-end place ger'>Jaime Prats, San Rafael.<br></br>Provincia de Mendoza.</p>
        :
        null
      }
    </footer>
  )
}

export default Footer