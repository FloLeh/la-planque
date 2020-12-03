import React, { Component } from 'react'
import './Contact.css'
import shadow5 from '../../assets/images/shadow5.png'
import smiley from '../../assets/images/picto_smiley.png'
import plant from '../../assets/images/contact_plant2.png'

export class Contact extends Component {

  render() {
    return (
      <div id='contact' className='contact'>
        <img className='contact__shadow' src={shadow5} alt="shadow5"/>
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
          <img className='smiley' src={smiley} alt="smiley"/>
        </div>
      </div>
    )
  }
}

export default Contact
