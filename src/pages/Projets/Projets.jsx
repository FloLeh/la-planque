import React, { Component } from 'react'
import { Projet } from '../../components'
import './Projets.css'
import shadow3 from '../../assets/images/shadow3.png'

export class Projets extends Component {
  render() {
    return (
      <div id='projets' className='projets'>
        <img className='projets__shadow' src={shadow3} alt="shadow3"/>
        <div className="projects__container">
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
          <Projet/>
        </div>
      </div>
    )
  }
}

export default Projets
