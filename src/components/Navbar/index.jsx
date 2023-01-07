import React from 'react';
import NavbarBtn from '../NavbarBtn';
import "./styles.css";

const Navbar = ({opacity, media, click}) => {

  return (
    <ul className='col-12 m-0 p-0 col-lg-9 ms-xl-5 d-flex flex-column align-items-start flex-lg-row justify-content-around align-items-lg-center navbar mt-lg-2 pt-0' style={{opacity:opacity}}>
      <li className='fut p-0 linkHome'><img className='px-3' src="assets/img/logos/homeLogo.png" alt="homeLogo" hidden={!media} /><NavbarBtn page={""} /></li>
      <li className='fut p-0 linkAbout'><img className='px-3' src="assets/img/logos/aboutLogo.png" alt="aboutLogo" hidden={!media} /><NavbarBtn page={"Nosotros"} /></li>
      <li className='fut p-0 linkProducts'><img className='px-3' src="assets/img/logos/productsLogo.png" alt="productsLogo" hidden={!media} /><NavbarBtn page={"Productos"} /></li>
      <li className='fut p-0 linkAwards'><img className='px-3' src="assets/img/logos/awardsLogo.png" alt="awardsLogo" hidden={!media} /><NavbarBtn page={"Reconocimientos"} /></li>
      <li className='fut p-0 linkContact'><img className='px-3' src="assets/img/logos/contactLogo.png" alt="contactLogo" hidden={!media} /><NavbarBtn page={"Contacto"} /></li>
      <li hidden={media}>
        <ul className='d-flex justify-content-around align-items-center p-0'>
          <li className='me-1 me-xl-2'><a href="https://instagram.com/laquintadejaime?igshid=YmMyMTA2M2Y="><img src="assets/img/logos/igLogo.png" alt="Logo Instagram"/></a></li>
          <li className='mx-2 mx-xl-3'><a href="https://wa.me/+5492625523023" rel="noreferrer" target="_blank"><img src="assets/img/logos/wspLogo.png" alt="Logo Whatsapp"/></a></li>
          <li className='ms-1 ms-xl-2'><a href="https://www.facebook.com/profile.php?id=100088221063634"><img src="assets/img/logos/faceLogo.png" alt="Logo Facebook"/></a></li>
        </ul>
      </li>
    </ul>
  )
}

export default Navbar