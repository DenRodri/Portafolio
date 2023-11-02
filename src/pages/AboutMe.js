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
          <div className="container about-page">
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
            Soy bueno trabajando con metas en mente, y definirlas no se me hace difícil a la hora de emprender cualquier tarea. He tenido éxito al ejercer liderazgo en otras actividades y pondré mis conocimientos y buen desempeño a disposición de la empresa.<br/><br/>
            </p>
            <p>
            Conozco mis límites y no tengo temor a superarlos y aprender siempre cosas nuevas. Puedo reconocer mis errores y así crecer como persona, lo cual me ayuda en mis competencias a la hora de trabajar.
            </p>
            <p>

            </p>
          </div>
      </div>
      </div>
      </div>
    )
  }
  