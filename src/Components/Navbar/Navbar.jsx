import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext/useAppContext';
import Img from '../../57978.jpg'
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

import './Navbar.css'
import { actionTypes } from '../../Context/AppContext/AppContext';
function Navbar() {
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: actionTypes.TOGGLE_THEME });
    localStorage.theme = JSON.stringify(!state.darkMode)
  };

  return (
  <header className="header-outer bg-[#D4ADFC] border-b-1 border-[#D4BDFC]">
	  <div className="header-inner responsive-wrapper flex justify-between w-full  max-w-[1200px] mx-auto">
      <Link to="/" className='header-logo rounded-full overflow-hidden'>	  		
        <img src={Img} />
      </Link>

	  	<nav className="header-navigation">
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
        <button className='flex items-center' onClick={toggleTheme}>
          Tema ( {state.darkMode ? <BsFillMoonStarsFill/> : <BsSun/>} )
        </button>		
      </nav>
	  </div>
  </header>
)}

export default Navbar;
