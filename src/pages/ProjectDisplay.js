import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from "../Components/ProjectList";
import "./ProjectDisplay.scss"
import GitHubIcon from "@material-ui/icons/GitHub"

export default function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
        <h1> {project.name} </h1>
        <img alt="projectimage" style={{ height: '50vh', width: '50vw'}} src={project.image} />
        <p>
          <b>Habilidades: </b> {project.skills}
        </p>
        <a href={project.link} target='blank'><GitHubIcon/></a>
    </div>
  )
}
