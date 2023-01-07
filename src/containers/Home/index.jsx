import React, {useEffect, useState} from 'react';

import "./styles.css";

const Home = () => {

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
      <section id="carouselExampleControls" className="carousel slide p-0" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='banner bannerPos1 d-flex flex-column align-items-start justify-content-center'>
              <h2 className='text-start geor'><span>Producimos </span><br />el primer licor de vino de mendoza.</h2>
              <p className='text-start geor pe-5 pt-1'>Malbec, Chardonnay y Chardonnay durazno</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className='banner bannerPos2 d-flex flex-column align-items-start justify-content-center'>
              <h2 className='text-start geor'>Disfruta de<br /> una gran variedad de licores.</h2>
              <p className='text-start ger pe-5 pt-1'>Hechos con la mejor materia prima.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className='banner bannerPos3 d-flex flex-column align-items-start justify-content-center'>
              <h2 className='text-start geor'>Licores frutales</h2>
              <p className='text-start geor pe-5 pt-1'>Lemoncello, Durazno, Naranja, Mandarina, Boysemberry.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className='banner bannerPos4 d-flex flex-column align-items-start justify-content-center'>
              <h2 className='text-start geor'>Licores naturales</h2>
              <p className='text-start geor pe-5 pt-1'>Miel y Manzanilla</p>
              <p className='text-start ger pe-5 pt-2 pt-lg-5'>El licor de manzanilla cuenta con propiedades digestivas por lo que su amargor y dulzor ayuda a recuperar la compostura tras una comida abundante. Cuenta con una graduación alcohólica más suave, para resaltar su aroma y sabor. Por su parte el licor de miel es ideal para combatir afecciones respiratorias , ademas es ideal para reposteria, cocina y tragos preparados. Es una bebida dulce y refrescante que se puede tomar sola, ya sea fría a con cubos de hielo.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      <section className='infoHome px-3 my-4 px-md-5 my-md-5'>
        <div className='d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-between'>
          <h3 className='text-start geor infoHomeTitle m-0'><span>Licores artesanales</span><br /> genuinos del sur mendocino.</h3>
          <p className='ger infoHomeText m-0 pt-4 pt-lg-0'>Presentamos la línea de Licores Artesanales La Quinta de Jaime, compuesta por 19 variedades de exquisito sabor, aroma, calidad, y una estética visual delicada e inigualable. Vivimos y producimos nuestros licores en el sur de la provincia de Mendoza, en un pequeño pueblo llamado Jaime Prats, la tierra de nuestros padres y la misma que nos vio crecer. De allí nace nuestro nombre.</p>
        </div>
      </section>
      <section className='productsHome p-0 my-3 my-lg-5'>
        <div className='d-flex flex-row justify-content-between align-items-center flex-wrap px-5'>
          <img src="assets/img/home/rowTLogo1.png" alt="rowTLogo1" />
          <img src="assets/img/home/rowTLogo2.png" alt="rowTLogo2" />
          <img src="assets/img/home/rowTLogo3.png" alt="rowTLogo3" />
          <img src="assets/img/home/rowTLogo4.png" alt="rowTLogo4" />
          {windowSize > 1023 &&
          <>
          <img src="assets/img/home/rowTLogo5.png" alt="rowTLogo5" />
          <img src="assets/img/home/rowTLogo6.png" alt="rowTLogo6" />
          <img src="assets/img/home/rowTLogo7.png" alt="rowTLogo7" />
          </>
          }
        </div>
        <div>
          <h3 className='my-5 geor'>Nuestros productos son:</h3>
          <div className='d-flex flex-row text-center justify-content-around align-items-center geor'>
            <div className='rowMLogo rowMLogo1 d-flex flex-column justify-content-center'>
              <p className='rowMText'><span>Sin</span><br /> aditivos</p> 
            </div>
            <div className='rowMLogo rowMLogo2 d-flex flex-column justify-content-center'>
              <p className='rowMText'><span>Sin</span><br /> conservantes</p>
            </div>
            <div className='rowMLogo rowMLogo3 d-flex flex-column justify-content-center'>
              <p className='rowMText'><span>Sin</span><br /> colorantes</p>
            </div>
            <div className='rowMLogo rowMLogo4 d-flex flex-column justify-content-center'>
              <p className='rowMText'><span>Sin</span><br /> esencias artificiales</p>
            </div>
          </div>
          {windowSize > 767 &&
          <div className='d-flex flex-row text-center justify-content-around align-items-center my-5 geor'>
            <p className='category py-4 py-lg-5'>Frutales</p>
            <p className='category py-4 py-lg-5'>Naturales</p>
            <p className='category py-4 py-lg-5'>Regionales</p>
            <p className='category py-4 py-lg-5 categoryCh'>de Chocolate</p>
            <p className='category py-4 py-lg-5'>de Vino</p>
            <p className='category py-4 py-lg-5'>de Crema</p>
            <p className='category py-4 py-lg-5'>Clásicos</p>
          </div>
          }
        </div>
        {windowSize > 767 &&
        <div className='d-flex flex-row justify-content-between align-items-center flex-wrap px-5'>
          <img src="assets/img/home/rowBLogo1.png" alt="rowBLogo1" />
          <img src="assets/img/home/rowBLogo2.png" alt="rowBLogo2" />
          <img src="assets/img/home/rowBLogo3.png" alt="rowBLogo3" />
          <img src="assets/img/home/rowBLogo4.png" alt="rowBLogo4" />
          {windowSize > 1023 &&
          <>
          <img src="assets/img/home/rowBLogo5.png" alt="rowBLogo5" />
          <img src="assets/img/home/rowBLogo6.png" alt="rowBLogo6" />
          <img src="assets/img/home/rowBLogo7.png" alt="rowBLogo7" />
          </>
          }
        </div>
        }
      </section>
      <section className='awardHome my-lg-5 px-4 ps-lg-5'>
        <h3 className='text-start my-4 my-md-5 ger'><span className='geor'>Conocé </span><br />nuestros multipremiados licores de vinos.</h3>
        <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center flex-wrap my-3 my-lg-5 ger'>
          <img className='awardHomeBanner ms-0 ms-lg-1 ms-xl-3' src="assets/img/home/bannerAwards.png" alt="bannerAwards" />
          <div className='text-center text-md-start awardHomeInfo me-2 my-3 py-lg-3'>
            <p><img className='mx-md-3 mx-lg-0 mx-xl-3' src="assets/img/home/prizeLogo.png" alt="prizeLogo" />2008-LA MUJER ELIGE /Licor de Vino Malbec - Medalla de plata.</p>
            <p><img className='mx-md-3 mx-lg-0 mx-xl-3' src="assets/img/home/prizeLogo.png" alt="prizeLogo" />2009-VINUS /Licor de Vino Malbec - Medalla de oro.</p>
            <p><img className='mx-md-3 mx-lg-0 mx-xl-3' src="assets/img/home/prizeLogo.png" alt="prizeLogo" />2011-VINUS /Licor de Vino Blanco - Doble medalla de oro.</p>
            <p><img className='mx-md-3 mx-lg-0 mx-xl-3' src="assets/img/home/prizeLogo.png" alt="prizeLogo" />2012-LA MUJER ELIGE /Licor de Vino Malbec "Gran Noble Rojo" - Medalla de oro.</p>
            <p><img className='mx-md-3 mx-lg-0 mx-xl-3' src="assets/img/home/prizeLogo.png" alt="prizeLogo" />2019-VINUS /Licor de Vino Blanco "Gran Noble Ambar" - Doble medalla de oro.</p>
            <p><img className='mx-md-3 mx-lg-0 mx-xl-3' src="assets/img/home/prizeLogo.png" alt="prizeLogo" />2012-LA MUJER ELIGE /Licor de Vino Blanco "Gran Noble Ambar" - Medalla de oro.</p>
          </div>
        </div>
      </section>
      <section className='newsHome'>
        <h4 className='text-start ps-0 ps-3 ps-md-5 geor'>Noticias</h4>
        <div className='d-flex flex-row justify-content-around align-items-start my-4 my-md-5 flex-wrap ger'>
          <div className='d-flex flex-column justify-content-start align-items-center news'>
            <img src="assets/img/home/news1.png" alt="news1" className='my-3 my-md-0 mb-md-5' />
            <a className='mt-3 mt-md-5 text-start px-3 ps-md-4 pe-md-2' href='http://camaradealvear.org.ar/son-promotores-constantes-de-alvear-distincion-al-emprendimiento-del-ano-vinculado-al-turismo/'>Son promotores constantes de Alvear: distinción al emprendimiento del año vinculado al Turismo</a>
          </div>
          <div className='d-flex flex-column justify-content-start align-items-center news mt-5 mt-md-0'>
            <img src="assets/img/home/news2.png" alt="news2" className='my-3 my-md-0 mb-md-5' />
            <a className='mt-3 mt-md-5 text-start px-3 ps-md-4 pe-md-2' href="http://revistadivergente.com/notas/1966-los-licores-artesanales-'la-quinta-de-jaimehan-conquistado-premios-internacionales-y-son-riquísimos/?utm_source=dlvr.itutm_medium=facebook'">Los licores artesanales "La Quinta de Jaime" han conquistado premios internacionales y son riquísimos</a>
          </div>
          <div className='d-flex flex-column justify-content-start align-items-center news mt-5 mt-lg-0'>
            <img src="assets/img/home/news3.png" alt="news3" className='my-3 my-md-0 mb-md-5'/>
            <a className='mt-3 mt-md-5 text-start px-3 ps-md-4 pe-md-2' href="https://unoalvear.com/2016/08/23/licores-de-jaime-prats-premiados-con-doble-medalla-de-oro/">Licores de Jaime Prats premiados con doble «Medalla de Oro»</a>
          </div>
          <iframe title='instagram' className='instagram mt-5 mt-xl-0' width="auto" height="585" src="https://www.instagram.com/p/ClrMIYQsEx7/embed"></iframe>
        </div>
      </section>
    </main>
  )
}

export default Home