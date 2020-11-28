import React, { Component } from 'react'
import './Collectif.css'
import shadow4 from '../../assets/images/shadow4.png'

export class Collectif extends Component {
  render() {
    return (
      <div id='collectif' className='collectif'>
        <img className='collectif__shadow' src={shadow4} alt="shadow4"/>
        <div className="collectif__container">
          <div className='one'>1 collectif</div>
          <div>façonné de 3 professionnelles</div>
          <div>3 domaines s'unissent</div>
          <div>Architecture.Paysage.Architecture intérieure</div>
          <div>3 fois plus d'expériences</div>
          <div>pour le projet qui vous fait envie</div>
          <div className="collectif__video">
            VIDEO
          </div>
        </div>
      </div>
    )
  }
}

export default Collectif
