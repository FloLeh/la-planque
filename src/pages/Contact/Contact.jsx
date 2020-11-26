import React, { Component } from 'react'
import './Contact.css'
import shadow5 from '../../assets/images/shadow5.png'

export class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <img className='contact__shadow' src={shadow5} alt="shadow5"/>
        <div className="contact__container">
          <div className="email">laplanque.archi@gmail.com</div>
          <div className="contact__tel">
            <div className="lisa">
              <p className="taff">ARCHITECTE D'INTÉRIEUR</p>
              <p className="tel">06.32.66.81.86</p>
              <p className="nom">Lisa LEHUÉDÉ</p>
            </div>
            <div className="sep"></div>
            <div className="nina">
              <p className="taff">INGÉNIEURE PAYSAGISTE</p>
              <p className="tel">06.19.04.04.88</p>
              <p className="nom">Nina BÉNÉTEAU</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
