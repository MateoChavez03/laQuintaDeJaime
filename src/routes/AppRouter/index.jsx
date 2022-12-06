import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "../../containers/Header";
import Footer from "../../containers/Footer"
import Home from "../../containers/Home";
import Contact from "../../containers/Contact";
import Awards from "../../containers/Awards";
import About from "../../containers/About";
import Products from "../../containers/Products";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/contacto' element={<Contact />}> </Route>
            <Route path='/reconocimientos' element={<Awards />}> </Route>
            <Route path='/nosotros' element={<About />}> </Route>
            <Route path='/productos' element={<Products />}> </Route>
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter