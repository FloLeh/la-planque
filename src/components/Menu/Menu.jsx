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
            <li><span></span><a href="#missions">MISSIONS</a></li>
            <li><span></span><a href="#projets">PROJETS</a></li>
            <li><a href="#home">
             <img className='menu__logo' src={logo} alt='logo'></img>
            </a></li>
            <li><span></span><a href="#collectif">COLLECTIF</a></li>
            <li><span></span><a href="#contact">SE RENCONTRER</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
