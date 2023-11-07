import React from 'react'
import '../pages/Styles.scss'
import { useNavigate } from 'react-router-dom/dist';

export function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  return (
    <div className="projectItem"
    onClick={() => {
      navigate("/project/" + id);
    }}>
        <div style={{ backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1> {name} </h1>
    </div>
  );
}
