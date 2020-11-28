/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Menu.css'
import logo from '../../assets/images/logo_small.png'
import { Link } from 'react-router-dom'

export class Menu extends Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault()
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          })
      })
  })
  }

  render() {
    return (
      <div className='menu'>
        <nav>
          <ul>
            <li><a href="#missions">MISSIONS</a><span></span></li>
            <li><a href="#projets">PROJETS</a><span></span></li>
            <li><Link to="/">
              <img className='menu__logo' src={logo} alt='logo'></img>
            </Link></li>
            <li><a href="#collectif">COLLECTIF</a><span></span></li>
            <li><a href="#contact">SE RENCONTRER</a><span></span></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
