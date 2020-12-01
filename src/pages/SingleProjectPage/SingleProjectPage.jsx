import React from 'react'
import data from '../../projets.json'
import './SingleProjectPage.css'
import arrow from '../../assets/images/arrow.png'
import { Link } from 'react-router-dom'

export const SingleProjectPage = ({ match }) => {
  const { projectTitle } = match.params
  const project = data.projects.find(project => project.title === projectTitle)

  const nextProjectTitle = () => {
    const index = data.projects.findIndex(project => project.title === projectTitle)
    if (index !== data.projects.length - 1) {
      return data.projects[index + 1].title
    } else {
      return data.projects[0].title
    }
  }
  
  if (!project) {
    return (
      <section>
        <h2>Project not found</h2>
      </section>
    )
  }

  return (
    <div className="single-project">
      <a className='closing-cross' href='/#projets'>
        X
      </a>
      <div className="single-project__left">
        <img className='arrow-prev' src={arrow} alt="previous"/>
        <div className="carousel"></div>
        <img className='arrow-next' src={arrow} alt="next"/>
        <Link className="single-project__next" to={`/projets/${nextProjectTitle()}`}>
          Suivant
        </Link>
      </div>
      <div className="single-project__right">
      <h4 className='project-title' >{project.title}</h4>
        <div className='project-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem doloremque odio minima nihil veritatis qui incidunt? Cum aliquam suscipit architecto placeat voluptatum ad vel laudantium nisi, quasi maiores tempora!
        </div>
      </div>
    </div>
  )
}

export default SingleProjectPage
