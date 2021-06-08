import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import paysage from '../../assets/images/picto_paysage.png'
import dossier from '../../assets/images/picto_dossier_admini.png'
import archi from '../../assets/images/picto_archi.png'
import mobilier from '../../assets/images/picto_archi_int.png'
import visuel from '../../assets/images/picto_3d.png'
import shadow2 from '../../assets/images/shadow2.png'
import './Missions.css'
import { Mission } from '../../components'

export class Missions extends Component {
  render() {
    return (
      <div id='missions' className='missions'>
        <LazyLoadImage
          className='mission__shadow'
          alt="shadow2"
          src={shadow2} />
        {/* <img  className='mission__shadow' src={shadow2} alt="shadow2"/> */}
        <div className="pictos">
          <Mission text='PAYSAGE' alt='paysage' delay='100' image={paysage}/>
          <Mission text='DÉMARCHES ADMINISTRATIVES' alt='dossier' delay='200' image={dossier}/>
          <Mission text='ARCHITECTURE' alt='archi' delay='300' image={archi}/>
          <Mission text='MOBILIER SUR MESURE' alt='mobilier' delay='400' image={mobilier}/>
          <Mission text='VISUELS 3D' alt='visuels' delay='500' image={visuel}/>
        </div>
        <div className='mission__bottom'>Le collectif vous propose des missions adaptées à votre projet et à vos besoins. <br/> Un projet peut être traité dans sa globalité ou partiellement.</div>
      </div>
    )
  }
}

export default Missions
