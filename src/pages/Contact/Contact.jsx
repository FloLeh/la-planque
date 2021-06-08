import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Contact.css'
import shadow5 from '../../assets/images/shadow5.png'
import yeux_smiley from '../../assets/images/picto_smiley_sans_bouche.png'
import bouche_smiley from '../../assets/images/picto_smiley_sans_yeux.png'
import plant from '../../assets/images/contact_plant3.png'

export class Contact extends Component {

  render() {
    return (
      <div id='contact' className='contact'>
        <LazyLoadImage
          className='contact__shadow'
          alt="shadow5"
          src={shadow5} />
        <div className="contact__container">
          <a className="email" href="mailto:laplanque.archi@gmail.com">laplanque.archi@gmail.com</a>
          <div className="contact__tel">
            <div className="lisa">
              <p className="taff">ARCHITECTE D'INTÉRIEUR</p>
              <a href='tel:+33632668186' className="tel">06.32.66.81.86</a>
              <p className="nom">Lisa LEHUÉDÉ</p>
            </div>
            <div className="sep"></div>
            <div className="nina">
              <p className="taff">INGÉNIEURE PAYSAGISTE</p>
              <a href='tel:+33619040488' className="tel">06.19.04.04.88</a>
              <p className="nom">Nina BÉNÉTEAU</p>
            </div>
          </div>
          <img className='plante' src={plant} alt="plante"/>
          <div className="signature"><span>site réalisé par florian lehuédé</span> <span> - florianlehuede@gmail.com</span></div>
          <div className="smiley" data-aos-duration='400' data-aos='fade-left' data-aos-anchor-placement="bottom-bottom">
            <img className='yeux' src={yeux_smiley} alt="smiley yeux"/>
            <img className='bouche' src={bouche_smiley} alt="smiley bouche"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
