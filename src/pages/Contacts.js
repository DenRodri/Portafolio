import React from 'react';

import './ContactForm.scss'; 

export function Contacts() {
  

  return (
    <div className="contact-form-container">
      <h1>Contactame</h1>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Tu nombre" />
        <input type="email" name="email" placeholder="Tu email" />
        <textarea name="message" placeholder="Tu mensaje"></textarea>
        <button type="submit">Mandar mensaje</button>
      </form>
    </div>
  );
}