import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Projet } from '../../components'
import './Projets.css'
import shadow3 from '../../assets/images/shadow3.png'
import { Link } from 'react-router-dom'
import data from '../../projets.json'

export const Projets = () => {

  const getUrl = (title) => {
    switch (title) {
      case 'ARCHITECTURE':
        return `/projets/architecture/${data.projects.architecture[0].title.split(' ').join('_')}`
    
      case 'MOBILIER':
        return `/projets/mobilier/${data.projects.mobilier[0].title.split(' ').join('_')}`
    
      case 'PAYSAGE':
        return `/projets/paysage/${data.projects.paysage[0].title.split(' ').join('_')}`
    
      case 'VISUELS 3D':
        return `/projets/visuels_3d/${data.projects.visuels_3d[0].title.split(' ').join('_')}`
    
      default:
        break;
    }
  }

  const renderProjects = data.covers.map(cover => (
    <Link key={cover.title} to={getUrl(cover.title)}>
      <Projet title={cover.title}/>
    </Link>
  ))

  return (
    <div id='projets' className='projets'>
      <LazyLoadImage
          className='projets__shadow'
          alt="shadow3"
          src={shadow3} />
      <div className="projects__container">
        {renderProjects}
      </div>
    </div>
  )
}

export default Projets
