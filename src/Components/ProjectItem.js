import React from 'react'
import '../pages/Styles.scss'

export function ProjectItem({image, name}) {
  return (
    <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1> {name} </h1>
    </div>
  );
}
