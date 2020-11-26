/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import linkedin from '../../assets/images/linkedin.png'
import amies from '../../assets/images/picto_amies.png'
import instagram from '../../assets/images/instagram.png'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Menu/>
        <div className="socials">
          <a href="">
            <img src={instagram} alt="instagram"/>
          </a>
          <a href="">
            <img src={amies} alt="amies"/>
          </a>
          <a href="">
            <img src={linkedin} alt="linkedin"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
