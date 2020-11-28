import React, { Component } from 'react'
import paysage from '../../assets/images/picto_paysage.png'
import dossier from '../../assets/images/picto_dossier_admini.png'
import archi from '../../assets/images/picto_archi.png'
import mobilier from '../../assets/images/picto_archi_int.png'
import visuel from '../../assets/images/picto_3d.png'
import shadow2 from '../../assets/images/shadow2.png'
import './Missions.css'

export class Missions extends Component {
  render() {
    return (
      <div id='missions' className='missions'>
        <img className='mission__shadow' src={shadow2} alt="shadow2"/>
        <div className="pictos">
          <div className="mission">
            <img src={paysage} alt="paysage"/>
            <div>PAYSAGE <br/> </div>
          </div>
          <div className="mission">
            <img src={dossier} alt="paysage"/>
            <div>DÉMARCHES ADMINISTRATIVES</div>
          </div>
          <div className="mission">
            <img src={archi} alt="paysage"/>
            <div>ARCHITECTURE <br/> </div>
          </div>
          <div className="mission">
            <img src={mobilier} alt="paysage"/>
            <div>MOBILIER SUR MESURE</div>
          </div>
          <div className="mission">
            <img src={visuel} alt="paysage"/>
            <div>VISUELS 3D</div>
          </div>
        </div>
        <div className='mission__bottom'>Le collectif vous propose des missions adaptées à votre projet et à vos besoins. <br/> Un projet peut être traité dans sa globalité ou partiellement.</div>
      </div>
    )
  }
}

export default Missions
