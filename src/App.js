import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe.js";
import { Contacts } from "./pages/Contacts.js";
import { PagPrincipal } from "./pages/PagPrincipal.js";
import Logo from "./assets/images/Denzels.png"
import './App.scss'; 

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><img classname="sub-logo" src={Logo} alt="Denzels"/></Link>

        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">Acerca de mi</Link>
          </li>
          <li>
            <Link to="/contacts">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;