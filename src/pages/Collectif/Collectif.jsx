import React, { Component } from 'react'
import './Collectif.css'
import shadow4 from '../../assets/images/shadow4.png'
import wip from '../../assets/images/work n progress.png'
import wip_hourglass from '../../assets/images/i.png'

export class Collectif extends Component {
  render() {
    return (
      <div id='collectif' className='collectif'>
        <img className='collectif__shadow' src={shadow4} alt="shadow4"/>
        <div className="collectif__container">
          <div>1 collectif</div>
          <div>f<span className='cedille'>a</span>conné de 3 professionnelles</div>
          <div>3 domaines s'unissent</div>
          <div>Architecture . Paysage . Architecture intérieure</div>
          <div>3 fois plus d'expériences</div>
          <div>pour le projet qui vous fait envie...</div>
          <div className="collectif__video">
            <img className='wip' src={wip} alt="wip" />
            <img className='wip_hourglass' src={wip_hourglass} alt="hourglass" />
          </div>
        </div>
      </div>
    )
  }
}

export default Collectif
