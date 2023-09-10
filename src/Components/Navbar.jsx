import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext/useAppContext';

function Navbar() {
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        Cambiar Tema ({state.darkMode ? 'Oscuro' : 'Claro'})
      </button>
    </nav>
  );
}

export default Navbar;
