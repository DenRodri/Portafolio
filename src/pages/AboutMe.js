  import React from 'react'
  import { useEffect, useState } from 'react'
  import './Styles.scss'
  import './cube.scss'
  import AnimatedLetters from '../Components/animatedLetters'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import './cube.scss'


  export function AboutMe() {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      return () => setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
      <div>
          <div className="about-page">
          <div className="intro">
            

        <div className="text">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
          <div className="text">
              <h1>
                <AnimatedLetters strArray={['A', 'c','e','r','c','a',' ','d','e',' ','m','i']}/>
              </h1>

              <p>
              Soy un estudiante aplicado de programacion de Republica Dominicana en mi ultimo año escolar. Tengo una pasion en desarrollo de software y me gusta pasar mi tiempo con retos y metas bien definidas. Soy bueno adaptandome a nuevas experiencias conociendo mis propios limites para superarlos y aprender cosas nuevas.<br/><br/>
            </p>
            <p>
            Se como reconocer mis errores y asi crecer como persona, lo cual me ayuda en mis competencias a la hora de trabajar. Soy estudiante de ITESA, y los valores que me han dado me han hecho la persona que soy hoy en dia. Gracias a ello puedo ejercer liderazgo y poner mis conocimientos y buen desempeño a lo que hago.<br/><br/>
            </p>
            
          </div>
      </div>
      </div>
      </div>
    )
  }
  