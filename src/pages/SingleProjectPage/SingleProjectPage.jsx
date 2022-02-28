import React, { useState } from 'react'
import data from '../../projets.json'
import './SingleProjectPage.css'
import { Redirect, withRouter } from 'react-router-dom'
import { Carousel } from '../../components'
import next_arrow from '../../assets/images/arrow_project.png'

const titles = { 
  "paysage": 'AMÉNAGEMENT PAYSAGER',
  "architecture": "ARCHITECTURE INTÉRIEURE",
  "mobilier": "MOBILIER SUR MESURE", 
  "visuels_3d": "VISUELS 3D" 
}

export const SingleProjectPage = ({ match }) => {
  const { projectTitle, cover } = match.params
  const cleanProjectTitle = projectTitle.split('_').join(' ')
  const projects = data.projects[cover]
  const project = projects.find(project => project.title === cleanProjectTitle)
  const [content, setContent] = useState(project.content[0])
  const index = projects.findIndex(project => project.title === cleanProjectTitle)

  const cleanTitle = (title) => {
    let res = title.split(' ')
    const last = res[res.length - 1]
    const lastChar = last[last.length - 2]
    if (['2','3','4'].includes(lastChar)) {
      res[res.length - 1] = res[res.length - 1].slice(0, last.length - 2) + "."
      return res.join(' ')
    }
    return res.join(' ')
  } 

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

  const changeContent = (index) => {
    setContent(project.content[index])
  } 

  return (
    <div className="single-project">
      <a className='closing-cross' href='/#projets'>
        <div></div>
        <div></div>
      </a>
      <div className="single-project__left">
        <Carousel key={cleanProjectTitle} projectTitle={cleanProjectTitle} cover={cover} handleChange={(index) => changeContent(index)}/>
      </div>
      <div className="single-project__right">
        <h4 className='project-title' >{titles[cover]}</h4>
        <div className='project-description'>
          <p>{cleanTitle(project.title)}</p>
          {project.content && (<p>{content}</p>)}
          {project.legend && (<p className='project-legend'>{project.legend}</p>)}
        </div>
        <a className="single-project__next" href={`/projets/${cover}/${nextProjectTitle()}`}>
          <img src={next_arrow} alt="next"/>
        </a>
      </div>
    </div>
  )
}

export default withRouter(SingleProjectPage)
