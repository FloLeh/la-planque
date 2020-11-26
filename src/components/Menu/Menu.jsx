/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Menu.css'
import logo from '../../assets/images/logo_small.png'
import { Link } from 'react-router-dom'

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <nav>
          <ul>
            <li><Link to="/missions">MISSIONS</Link><span></span></li>
            <li><Link to="">PROJETS</Link><span></span></li>
            <li><Link to="/">
              <img className='menu__logo' src={logo} alt='logo'></img>
            </Link></li>
            <li><Link to="">COLLECTIF</Link><span></span></li>
            <li><Link to="">SE RENCONTRER</Link><span></span></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
