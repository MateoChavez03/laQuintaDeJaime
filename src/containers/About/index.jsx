import React, {useEffect, useState} from 'react';
import "./styles.css";

const About = () => {

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
    <main className='row about ger'>
      <h2 className='text-start mt-5 px-5 geor'>Acerca de nosotros</h2>
      <div className='d-flex flex-column align-items-center flex-lg-row justify-content-lg-center my-2 my-lg-5 px-5'>
        <p className='textJustify align-self-center'>Somos un emprendimiento familiar que nació hace 22 años por Noemí Ines Adaro (Mimí) y Carlos Alberto Pelegrina (Chicho), que gracias al delicioso sabor de un lemoncello proveniente de una antigua y tradicional receta familiar italiana, nos encontramos inmersos en la apasionante aventura de experimentar, investigar y crear los licores artesanales de La Quinta de Jaime.</p>
        <div>
          <img className='ms-lg-5 imgFirstRow' src="assets/img/about/mimiChicho.png" alt="Foto de Noemí y Carlos" />
          {windowSize > 1023 &&
          <p className='ms-lg-5 imgFoot'>Noemí Ines Adaro (Mimí) y Carlos Alberto Pelegrina (Chicho)</p>
          }
        </div>
      </div>
      <div className='d-flex flex-row justify-content-center my-2 my-lg-5 px-5'>
        { windowSize > 1023 &&
        <div>
          <img className='me-5 imgSecondRow' src="assets/img/about/lemonchello.png" alt="Primeras botellas de Lemonchello" />
          <p className='me-5 imgFoot'>Primer botella de Lemoncello.</p>
        </div>
        }
        <p className='textJustify align-self-center'>El Lemoncello fue nuestra primer experiencia como productores artesanales. Una tradicional receta familiar, proveniente de Ancona, Italia, encendió nuestra curiosidad e incentivó las ganas de concretar este tímido pero brillante proyecto familiar. El goce seductor de su delicado sabor y aroma, logró marcar nuestro sello de calidad inconfundible.</p>
      </div>
      <div className='my-2 my-lg-5'>
        <img className='imgThirdRow' src="assets/img/about/firstBottles.png" alt="Primera presentación de botellas" />
        <p className='imgFoot'>Primera presentacion de los licores La Quinta de Jaime.</p>
      </div>
      <div className='d-flex flex-row justify-content-center my-2 my-lg-5 px-5'>
        <p className='textJustify align-self-center'>La Quinta de Jaime se inició en el 2000, haciendo degustar sus productos por primera vez al público en la Primera Feria del Chacinado de la Escuela de Agricultura y debido a la gran aceptación de los mismos, decidieron participar al año siguiente de la Feria de la Ganadería de Zonas Áridas, en la cual asistieron durante 10 años, en ese entonces con 5 o 6 sabores.</p>
        {windowSize > 1023 &&
        <img className='ms-5 imgFourthRow' src="assets/img/about/feria1.png" alt="Primera Feria" />
        }
      </div>
      <div className='d-flex flex-column align-items-center flex-lg-row justify-content-lg-center my-2 my-lg-5 px-5'>
        <img className='me-lg-5 imgFifthRow' src="assets/img/about/mimiChicho2.png" alt="Primera medalla" />
        <p className='textJustify align-self-center my-2'>En el año 2008, con la visita y el impulso del Ingeniero Raúl Castellani, reconocido organizador de certámenes internacionales de vinos y licores, participamos por primera vez con un licor de vino malbec, con el cual obtuvimos nuestra primera medalla, y desde entonces siguimos cosechando reconocimiento internacional con 20 premios más (medallas de Plata, Oro, Doble Oro y menciones especiales)</p>
      </div>
      {windowSize > 1023 &&
      <div className='d-flex flex-row flex-wrap justify-content-around my-5 px-5'>
        <div className='mb-5'>
          <img className='imgEndRow' src="assets/img/about/chicho.png" alt="Chicho etiquetando botellas" />
          <p className='textEndRow imgFoot'>Chicho etiquetando botellas</p>
        </div>
        <div className='mb-5'>
          <img className='imgEndRow' src="assets/img/about/mimiChicho3.png" alt="Mimi y Chicho en General Alvear" />
          <p className='textEndRow imgFoot'>Reconocimiento de sus aportes al turismo de General Alvear (2022)</p>
        </div>
        <div className='mb-5'>
          <img className='imgEndRow' src="assets/img/about/mimi.png" alt="Mimi en la feria" />
          <p className='textEndRow imgFoot'>Mimí en la feria de artesanos de San Rafael.</p>
        </div>
        <div className='mb-5'>
          <img className='imgEndRow' src="assets/img/about/fantour.png" alt="Fantour" />
          <p className='textEndRow imgFoot'>Fantour periodistas con Miel Terra de Goyco</p>
        </div>
      </div>
      }
      <p className='text-center px-4 px-lg-0 foot my-5'>Nuestro firme objetivo es ofrecer un <span>producto distinto, original y atractivo</span>, que posea el equilibrio del sello de nobleza y calidad que nos identifica.</p>
    </main>
  )
}

export default About