import React, { createContext, useContext, useReducer } from 'react';

// Definimos el contexto
export const AppContext = createContext();

// Accesor personalizado para el contexto
// const useAppContext = () => {
//     const context = useContext(AppContext);
//     if (!context) {
//         throw new Error('useAppContext debe usarse dentro de un proveedor AppContext');
//     }
//     return context;
// };


// Tipos de acciones para el useReducer
export const actionTypes = {
    TOGGLE_THEME: 'TOGGLE_THEME',
    ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
    REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  };
  
  // Función reductora para gestionar el estado global
  const appReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.TOGGLE_THEME:
        return { ...state, darkMode: !state.darkMode };
      case actionTypes.ADD_TO_FAVORITES:
        return { ...state, favorites: [...state.favorites, action.payload] };
      case actionTypes.REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter((dentist) => dentist.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  // ... (código restante)
  

// Componente Provider que envuelve la aplicación
export const AppProvider = ({ children }) => {
    const initialState = {
        darkMode: false,
        favorites: []
    };

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

