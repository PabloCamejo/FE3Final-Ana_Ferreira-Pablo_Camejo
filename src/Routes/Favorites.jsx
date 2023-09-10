import React from 'react';
import { useAppContext } from '../Context/AppContext/useAppContext';

export function Favorites() {
  const { state } = useAppContext();

  return (
    <div>
      <h2>Dentistas Destacados</h2>
      {state.favorites.length === 0 ? (
        <p>No tienes dentistas destacados.</p>
      ) : (
        state.favorites.map((favorite) => (
          <div key={favorite.id}>
            <h3>{favorite.name}</h3>
            <p>Email: {favorite.email}</p>
            <p>Teléfono: {favorite.phone}</p>
            <p>Website: {favorite.website}</p>
          </div>
        ))
      )}
    </div>
  );
}

