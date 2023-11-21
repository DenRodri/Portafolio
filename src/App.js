import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe.js";
import { Contacts } from "./pages/Contacts.js";
import { PagPrincipal } from "./pages/PagPrincipal.js";
import { Projects } from "./pages/Projects.js"
import Logo from "./assets/images/Denzels.png"
import './App.scss'; 
import ProjectDisplay from "./pages/ProjectDisplay.js";

function App() {
  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-scroll">
        <div className="logo">
          <Link to="/"><h2 classname="sub-logo">Denzel's Portfolio</h2></Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">Acerca de mi</Link>
          </li>
          <li>
            <Link to="/Projects">Proyectos</Link>
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
        <Route path="/Projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay/>}/>
      </Routes>
    </div>
  );
}

export default App;