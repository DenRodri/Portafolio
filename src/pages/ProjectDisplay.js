import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from "../Components/ProjectList";

export default function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
        <h1> {project.name} </h1>
        <img alt="projectimage" src={project.image} />
    </div>
  )
}
