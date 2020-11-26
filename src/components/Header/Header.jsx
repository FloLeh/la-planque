import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import linkedin from '../../assets/images/linkedin.png'
import amies from '../../assets/images/picto_amies.png'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Menu/>
        <div className="socials">
          <img src={linkedin} alt="linkedin"/>
          <img src={amies} alt="linkedin"/>
          <img src={linkedin} alt="linkedin"/>
        </div>
      </div>
    )
  }
}

export default Header
