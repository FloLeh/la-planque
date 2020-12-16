import React from 'react'
import { Projet } from '../../components'
import './Projets.css'
import shadow3 from '../../assets/images/shadow3.png'
import { Link } from 'react-router-dom'
import data from '../../projets.json'

export const Projets = () => {
  const renderProjects = data.projects.map(project => (
    <Link key={project.title} to={`/projets/${project.title}`}>
      <Projet title={project.title} background={project.images[0]} />
    </Link>
  ))

  return (
    <div id='projets' className='projets'>
      <img className='projets__shadow' src={shadow3} alt="shadow3"/>
      <div className="projects__container">
        {renderProjects}
      </div>
    </div>
  )
}

export default Projets
