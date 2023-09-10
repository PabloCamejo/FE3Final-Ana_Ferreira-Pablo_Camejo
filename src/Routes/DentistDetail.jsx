import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext/useAppContext';
import { actionTypes } from '../Context/AppContext/AppContext';

export function DentistDetail() {
  const { id } = useParams();
  const { state, dispatch } = useAppContext();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/'+id).then(res => res.json()).then(data => setDentist(data))
  }, [id]);
  const handleAddToFavorites = () => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITES, payload: dentist });
  };

  const handleRemoveFromFavorites = () => {
    dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, payload: dentist });
  };

  if (!dentist) {
    return <div>Cargando...</div>;
  }

  const isFavorite = state?.favorites?.some((favDentist) => favDentist.id === dentist.id);

  return (
    <div>
      <h2>Detalles del Dentista</h2>
      <h3>{dentist.name}</h3>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>Eliminar de Favoritos</button>
      ) : (
        <button onClick={handleAddToFavorites}>Agregar a Favoritos</button>
      )}
    </div>
  );
}

