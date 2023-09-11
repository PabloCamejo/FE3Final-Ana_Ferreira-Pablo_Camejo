import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppContext } from '../Context/AppContext/useAppContext';
import { actionTypes } from '../Context/AppContext/AppContext';

export function Home() {
  const [dentists, setDentists] = useState([]);

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setDentists(data))
  }, []);

  const isFavorite = (id) => state.favorites.some((favDentist) => favDentist.id === id)


  const handleAddToFavorites = (id) => {
    const dentist = dentists.find(dentist => dentist.id === id)
    dispatch({ type: actionTypes.ADD_TO_FAVORITES, payload: dentist});
    const favs = [...state.favorites, dentist]
    localStorage.favs = JSON.stringify(favs)
  };

  const handleRemoveFromFavorites = (id) => {
    const dentist = dentists.find(dentist => dentist.id === id)
    dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, payload: dentist});
    const favs = state.favorites.filter(({id}) => id !== dentist.id)
    localStorage.favs = JSON.stringify(favs)
  };
  return (
    <main className='max-w-[1200px] mx-auto overflow-auto flex flex-col gap-4 pb-4 h-full'>
      <h2 className='font-semibold text-[24px]'>Listado de Dentistas</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mx-1'>
      {dentists.map((dentist) => (
        <article className="card card-1 flex justify-between relative" key={dentist.id}>
          {isFavorite(dentist.id) ? 
          <AiFillHeart className='absolute right-[16px] cursor-pointer' onClick={() => handleRemoveFromFavorites(dentist.id)}/> : 
          <AiOutlineHeart className='absolute right-[16px] cursor-pointer'onClick={() => handleAddToFavorites(dentist.id)}/>}
          <Link to={`/dentist/${dentist.id}`} className='card_link font-semibold'>
            <h3 className='w-[80%]'>{dentist.name}</h3>
          </Link>
          <p className='xl:flex xl:flex-col'><strong>Email:</strong> {dentist.email}</p>
          <p className='xl:flex xl:flex-col'><strong>Teléfono:</strong> {dentist.phone}</p>
          <p className='xl:flex xl:flex-col'><strong>Website:</strong> {dentist.website}</p>
            <Link to={`/dentist/${dentist.id}`} className='border-2 rounded-lg px-[8px] flex justify-center w-full text-center mt-4 hover:bg-green-400 hover:text-white'>
              Ver Perfil
            </Link>
        </article>
      ))}
      </section>

    </main>
  );
}

