import React from 'react'
import Flickity from "react-flickity-component"
import 'flickity/css/flickity.css'

import data from '../../projets.json'
import './Carousel.css'
import * as visuels from '../../assets/images/PROJET_3D'
import architecture from '../../assets/images/PROJET_ARCHITECTURE'
import * as mobilier from '../../assets/images/PROJET_MOBILIER'
import * as paysage from '../../assets/images/PROJET_PAYSAGE'

const flickityOptions = {
  wrapAround: true,
  arrowShape: { 
    x0: 15,
    x1: 55, y1: 40,
    x2: 55, y2: 35,
    x3: 20
  }
}

function Carousel(props) {
  const { projectTitle, cover } = props
  const coverName = () => {
    switch (cover) {
      case 'architecture':
        return architecture
    
      case 'mobilier':
        return mobilier
    
      case 'paysage':
        return paysage
    
      case 'visuels_3d':
        return visuels
    
      default:
        break;
    }
  } 

  const projects = data.projects[cover]
  const index = projects.findIndex(project => project.title === projectTitle)

  return (
    <div className={`carousel ${cover!=='architecture' && 'single_image'}`}>
      {cover==='architecture' ?
        <Flickity static options={flickityOptions}>
          {console.log(coverName()[index])}
          {coverName()[index].map((imageSrc => 
            <img key={imageSrc} className='carousel__image' src={imageSrc} alt={projectTitle} />
          ))}
        </Flickity> :
        <img className='carousel__image__single' src={coverName()[`Projet${index + 1}`]} alt={projectTitle} />
      }
      
    </div>
  )
}

export default Carousel