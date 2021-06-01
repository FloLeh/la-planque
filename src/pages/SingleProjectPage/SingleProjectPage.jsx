import React from 'react'
import data from '../../projets.json'
import './SingleProjectPage.css'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Carousel } from '../../components'
import next_arrow from '../../assets/images/arrow_project.png'

export const SingleProjectPage = ({ match }) => {
  const { projectTitle, cover } = match.params
  const cleanProjectTitle = projectTitle.split('_').join(' ')
  const projects = data.projects[cover]
  const project = projects.find(project => project.title === cleanProjectTitle)
  const index = projects.findIndex(project => project.title === cleanProjectTitle)

  const nextProjectTitle = () => {
    if (index !== projects.length - 1) {
      return projects[index + 1].title.split(' ').join('_')
    } else {
      return projects[0].title.split(' ').join('_')
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
        <Carousel key={cleanProjectTitle} projectTitle={cleanProjectTitle} cover={cover}/>
      </div>
      <div className="single-project__right">
        <h4 className='project-title' >{project.title}</h4>
        <div className='project-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem doloremque odio minima nihil veritatis qui incidunt? Cum aliquam suscipit architecto placeat voluptatum ad vel laudantium nisi, quasi maiores tempora!
        </div>
        <Link className="single-project__next" to={`/projets/${cover}/${nextProjectTitle()}`}>
          <img src={next_arrow} alt="next"/>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(SingleProjectPage)
