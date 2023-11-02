import React from 'react';
import './Styles.scss';
import picture from '../assets/images/Picture.png';
import { Link } from "react-router-dom";
import AnimatedLetters from '../Components/animatedLetters/index.js'
import { useState, useEffect } from 'react';

export function PagPrincipal() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['','D','e','n','z','e','l']
  const jobArray = ['P','r','o','g','r','a', 'm', 'a', 'd', 'o', 'r'] 

  useEffect(() => {
   setTimeout( () => {
      setLetterClass('text-animate-hover')
    }, 4000)
    }, [])


  return (
    <div className="pag-principal">
      <div className="content">
        <div className="intro">
          <div className="text">
            <h1>
          <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>ola</span>
            <br />
            <span className={`${letterClass} _13`}>S</span>
            <span className={`${letterClass} _14`}>oy</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Desarrollador de Backend<br/>
          ---------------------------<br/>
          Experto en javascript</h2>
          <Link to="/contacts" className='flat-button'>Contactame!</Link>
          </div>
          <div className="text">
            <img className="profile-image" alt="Denzel" src={picture}/>
          </div>

        </div>
      </div>
    </div>
  );
}