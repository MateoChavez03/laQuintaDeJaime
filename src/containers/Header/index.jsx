import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import hamburger from "../../images/hamburger.png";
import closeBtn from  "../../images/closeBtn.png"
import "./styles.css";

const Header = () => {

  
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [opacity, setOpacity] = useState(1)
  const [logo, setLogo] = useState(hamburger)
  const [media, setMedia] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)  
      setNavbarOpen(false)   
      setOpacity(1)
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const handleClick = () => {
    if (windowSize < 1023) {
      if (navbarOpen) {
        setOpacity(0)
        setLogo(hamburger)
        setMedia(false)
        setTimeout(() => {
          setNavbarOpen(false)
        }, 300)
      } else {      
        setOpacity(0)
        setLogo(closeBtn)
        setMedia(true)
        setNavbarOpen(true) 
        setTimeout(() => {
          setOpacity(1) 
        }, 1)    
        
      }
    }    
  }


  return (
    <header className='row d-flex flex-row justify-content-between align-items-center flex-wrap'>
      <img className='ps-5 ps-lg-0 me-xl-5 logo col-6 col-lg-3' src="assets/img/logos/logo.png" alt="Logo empresa" />
      {windowSize < 1023 &&
      <div className="hamburger col-6 d-flex align-items-center justify-content-end pe-5">
        <img className="hamburgerIcon" height={20} src={logo} alt="hamburger" onClick={handleClick}/>        
      </div>}
      {navbarOpen === false & windowSize < 1023
        ? 
          <></>
        :
      <Navbar opacity={opacity} media={media} click={handleClick} />
      }
    </header>
  )
}

export default Header