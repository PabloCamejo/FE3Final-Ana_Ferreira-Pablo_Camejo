import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setDentists(data))
  }, []);
  return (
    <div>
      <h2>Listado de Dentistas</h2>
      {dentists.map((dentist) => (
        <div key={dentist.id}>
          <Link to={`/dentist/${dentist.id}`}>
            <h3>{dentist.name}</h3>
          </Link>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ))}
    </div>
  );
}
