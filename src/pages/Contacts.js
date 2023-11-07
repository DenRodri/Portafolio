import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { contactConfig } from '../Components/content_option.js';
import './ContactForm.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tiam1qs', 'template_n40i3xm', form.current, 'a7ApeBIMB4FldgfZp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <Container>
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <h1 className="display-4 mb-2">Contactame</h1>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5" className="mb-5">
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
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form className="contact__form w-100" ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="user_name"
                      placeholder="Nombre"
                      type="text"
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="user_email"
                      placeholder="Email"
                      type="email"
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      Enviar
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="google-map">
        {/* Render your Google Maps component here */}
      </div>
    </div>
  );
}
