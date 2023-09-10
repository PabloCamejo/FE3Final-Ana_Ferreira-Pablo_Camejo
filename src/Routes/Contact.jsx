import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones del formulario
    if (formData.fullName.length < 5) {
      setFormError('Por favor, ingresa un nombre completo válido (más de 5 caracteres).');
      setFormSuccess('');
    } else if (!isValidEmail(formData.email)) {
      setFormError('Por favor, ingresa una dirección de correo electrónico válida.');
      setFormSuccess('');
    } else {
      // Envío del formulario (puedes realizar una solicitud a tu servidor o mostrar un mensaje de éxito simulado)
      // Aquí puedes agregar la lógica para enviar el formulario al servidor si es necesario.

      setFormSuccess(`Gracias ${formData.fullName}, te contactaremos pronto vía correo electrónico.`);
      setFormError('');
      setFormData({
        fullName: '',
        email: '',
      });
    }
  };

  const isValidEmail = (email) => {
    // Validación simple de dirección de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre Completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      {formSuccess && <p style={{ color: 'green' }}>{formSuccess}</p>}
    </div>
  );
}
