import React, { Component } from 'react'
import './Projets.css'
import shadow3 from '../../assets/images/shadow3.png'

export class Projets extends Component {
  render() {
    return (
      <div className='projets'>
        <img className='projets__shadow' src={shadow3} alt="shadow3"/>
        <div className="projects__container">
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
          <div className="projet"></div>
        </div>
      </div>
    )
  }
}

export default Projets
