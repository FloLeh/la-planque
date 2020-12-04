import React, { Component } from 'react'
import './Menu.css'
import logo from '../../assets/images/logo_small.png'

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
      <div className='menu hide_mobile'>
        <nav>
          <ul>
            <li><a href="#missions">MISSIONS</a><span></span></li>
            <li><a href="#projets">PROJETS</a><span></span></li>
            <li>
              <img className='menu__logo' src={logo} alt='logo'></img>
            </li>
            <li><a href="#collectif">COLLECTIF</a><span></span></li>
            <li><a href="#contact">SE RENCONTRER</a><span></span></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
