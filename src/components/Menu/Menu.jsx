import React, { Component } from 'react'
import './Menu.css'
import logo from '../../assets/images/logo_small.png'

export class Menu extends Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor, index) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const element = document.querySelector(this.getAttribute('href')).getBoundingClientRect().top
        const yOffset = index !== 4 ? -100 : 0
        window.scrollTo({
            top: element + yOffset + window.scrollY,
            behavior: 'smooth'
        })
      })
      anchor.addEventListener('click', () => {
        this.props.handleClick()
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
            <li><a href="#home">
             <img className='menu__logo' src={logo} alt='logo'></img>
            </a></li>
            <li><a href="#collectif">COLLECTIF</a><span></span></li>
            <li><a href="#contact">SE RENCONTRER</a><span></span></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
