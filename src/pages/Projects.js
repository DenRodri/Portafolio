import React from 'react'
import { ProjectItem } from '../Components/ProjectItem'
import './Styles.scss'
import { ProjectList } from '../Components/ProjectList'
export function Projects() {
  return (
    <div>
        
        <div className="projects">
      <h1> Mis proyectos </h1>
        <div className="projectList"> 
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />;
          })}
        </div>
      </div>

    </div>
  )
}
