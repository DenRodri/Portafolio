import React from 'react'
import { ProjectItem } from '../Components/ProjectItem'
import './Styles.scss'
import Project1 from "../assets/images/PrincBack.jpg"
export function Projects() {
  return (
    <div>
        
        <div className="projects">
      <h1> Mis proyectos </h1>
        <div className="projectList">
        <ProjectItem name="Social Media Website" image={Project1} />
        <ProjectItem name="Social Media Website" image={Project1} />
        <ProjectItem name="Social Media Website" image={Project1} />
        <ProjectItem name="Social Media Website" image={Project1} />
        <ProjectItem name="Social Media Website" image={Project1} />
        <ProjectItem name="Social Media Website" image={Project1} />
        </div>
      </div>

    </div>
  )
}
