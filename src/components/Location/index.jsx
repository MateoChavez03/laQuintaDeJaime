import React from 'react';
import './styles.css';

const Location = () => {
  return (
    <section className='col-12 col-lg location ps-4 align-self-center d-flex flex-column justify-content-between text-start'>
        <h2 className='my-5 geor text-start'>Contáctanos</h2>
        <p className='mb-5 ger'>
            Vivimos y producimos nuestros licores en el sur de la provincia de Mendoza, en un pequeño pueblo llamado Jaime Prats, la tierra de nuestros padres y la misma que nos vio crecer. De allí nace nuestro nombre. <br></br>Jaime Prats es un distrito que pertenece al departamento de San Rafael, situado a pocos kilómetros del departamento de General Alvear, al pie del cerro El Nevado.
        </p>
        <iframe className='mb-5 map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8011010639934!2d-67.81939578428293!3d-34.91144063038099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96783f2466b078a7%3A0xa5805bcedb27a3e4!2sLa%20Quinta%20de%20Jaime!5e0!3m2!1ses!2sar!4v1670970012321!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='location'>
        </iframe>
    </section>
  )
}

export default Location