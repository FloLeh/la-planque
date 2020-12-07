import React from 'react'
import data from '../../projets.json'
import './SingleProjectPage.css'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Carousel } from '../../components'

export const SingleProjectPage = ({ match }) => {
  const { projectTitle } = match.params
  const project = data.projects.find(project => project.title === projectTitle)
  const index = data.projects.findIndex(project => project.title === projectTitle)

  const nextProjectTitle = () => {
    if (index !== data.projects.length - 1) {
      return data.projects[index + 1].title
    } else {
      return data.projects[0].title
    }
  }

  if (!project) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="single-project">
      <a className='closing-cross' href='/#projets'>
        <div></div>
        <div></div>
      </a>
      <div className="single-project__left">
        <Carousel/>
      </div>
      <div className="single-project__right">
        <h4 className='project-title' >{project.title}</h4>
        <div className='project-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem doloremque odio minima nihil veritatis qui incidunt? Cum aliquam suscipit architecto placeat voluptatum ad vel laudantium nisi, quasi maiores tempora!
        </div>
        <Link className="single-project__next" to={`/projets/${nextProjectTitle()}`}>
          Suivant
        </Link>
      </div>
    </div>
  )
}

export default withRouter(SingleProjectPage)
