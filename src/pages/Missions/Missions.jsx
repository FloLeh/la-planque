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
            <img src={paysage} alt="paysage" data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay='100'/>
            <div>PAYSAGE <br/> </div>
          </div>
          <div className="mission">
            <img src={dossier} alt="dossier" data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay='200'/>
            <div>DÉMARCHES ADMINISTRATIVES</div>
          </div>
          <div className="mission">
            <img src={archi} alt="archi" data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay='300'/>
            <div>ARCHITECTURE <br/> </div>
          </div>
          <div className="mission">
            <img src={mobilier} alt="mobilier" data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay='400'/>
            <div>MOBILIER SUR MESURE</div>
          </div>
          <div className="mission">
            <img src={visuel} alt="visuel" data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay='500'/>
            <div>VISUELS 3D</div>
          </div>
        </div>
        <div className='mission__bottom'>Le collectif vous propose des missions adaptées à votre projet et à vos besoins. <br/> Un projet peut être traité dans sa globalité ou partiellement.</div>
      </div>
    )
  }
}

export default Missions
