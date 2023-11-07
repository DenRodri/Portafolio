import React, { useEffect, useState } from 'react';
import Validation from '../Components/Validation';
import { Button } from 'react-bootstrap';
import { contactConfig } from '../Components/content_option.js';
import './ContactForm.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

export function Contacts() {
  const initialText = 'Enviar';
  const [SubmitText, setSubmitText] = useState(initialText);
  const [formEdited, setFormEdited] = useState(false);

  const [values, setValues] = useState({
    user_name:'',
    user_email: '',
    message: '',

  });

  const [errors, setErrors] = useState({
    user_name:'',
        user_email: '',
        message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  


  useEffect(() => {
    if (!formEdited) {
      return;
    }
    
  }, [formEdited, errors]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = Validation(values);
    setErrors(newErrors);
    setFormEdited(true);
    if (Object.values(newErrors).every((error) => !error)) {
      emailjs
      .sendForm('service_tiam1qs', 'template_n40i3xm', form.current, 'a7ApeBIMB4FldgfZp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      setValues({
        user_name:'',
        user_email: '',
        message: '',
      })
      setSubmitText('Enviado!');
      setTimeout(() => {
      setSubmitText(initialText);
    }, 5000);
    } 
    
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
              <h1 className="display-4 mb-2">Contactame</h1>

              <h3 className="color_sec py-4">Ponte en contacto conmigo</h3>

              <address>
                <strong>Email : denzelvrodriguez@gmail.com</strong>
                <br />
                <br />
                <p>
                  <strong>Telefono: 849-273-7486</strong>
                </p>
              </address>
              <p>{contactConfig.description}</p>

              <form className="contact__form w-100" ref={form} onSubmit={sendEmail}>
                    <input
                      className="form-control"
                      id="name"
                      name="user_name"
                      placeholder="Nombre"
                      type="text"
                      onChange={handleInputChange}
                      value={values.user_name}
                    />
                    {errors.user_name && <p>{errors.user_name}</p>}
                    <input
                      className="form-control"
                      id="email"
                      name="user_email"
                      placeholder="Email"
                      type="email"
                      onChange={handleInputChange}
                      value={values.user_email}
                    />
                    {errors.user_email && <p>{errors.user_email}</p>}
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Mensaje"
                  rows="5"
                  onChange={handleInputChange}
                  value={values.message}
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
                <br />

                    <Button className="btn" type="submit" size="lg">
                      {SubmitText}
                    </Button>
                
              </form>
      </div>
      <div className="info-map">
      Santo Domingo Este
          <br />
          Alma Rosa I
          <br />
          Calle Puerto Rico <br />
          Residencial Attias #163 <br/>
          Apartamento 402-B <br />
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.492514830151435, -69.85566457092607]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.492514830151435, -69.85566457092607]}>
              <Popup>Denzel vive aqui, ven a saludarlo!</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div> 

  );
}
