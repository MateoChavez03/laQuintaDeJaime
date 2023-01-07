import React from 'react';

import { NavLink } from 'react-router-dom';

import "./styles.css";

const NavbarBtn = ({page}) => {

  let title = page
  if (page === "") {
    title = "Inicio"
  }

  return (
    <button>
      <NavLink to={page.toLowerCase()} className={({isActive}) => isActive ? "activeLink" : "link"} > {title} </NavLink>
    </button>
  )
}

export default NavbarBtn