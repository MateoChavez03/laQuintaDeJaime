import React, {useEffect, useState} from 'react';
import Award from '../../components/Award';

import "./styles.css";

const Awards = () => {

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
    <main className='row d-flex justify-content-around awards'>
      <div className='col-12 col-lg-8 col-xl-9 text-start ps-lg-5'>
        <h2 className='my-5 geor'> Reconocimientos </h2>
        <Award i={0}/>
        <Award i={1}/>
        <Award i={2}/>
        <Award i={3}/>
        <Award i={4}/>
        <Award i={5}/>
        <Award i={6}/>
        <Award i={7}/>
        <Award i={8}/>
        <Award i={9}/>
        <Award i={10}/>
        <Award i={11}/>
      </div>
      {windowSize > 1023 && <img className='col-lg-4 col-xl-3 p-0' src="assets/img/logos/mainBottle.png" alt="Botella" />}
    </main>
  )
}

export default Awards