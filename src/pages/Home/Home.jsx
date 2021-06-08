import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Home.css'
import catch_phrase from '../../assets/images/catch.png'
import logo_big_empty from '../../assets/images/logo_big_nocatch_nola.png'
import la_big from '../../assets/images/LA_big.png'
import shadow1 from '../../assets/images/shadow1.png'

export class Home extends Component {

  refreshAnims() {
    window.onscroll = () => {
      if (window.location.pathname === '/') {
        if (window.scrollY > window.innerHeight) {
          document.querySelector('.home__la').classList.remove('la-animation')
          document.querySelector('.home__catch').classList.remove('catch-animation')
        } else {
          document.querySelector('.home__la').classList.add('la-animation')
          document.querySelector('.home__catch').classList.add('catch-animation')
        }
      }
    }
  }
  
  render() {
    return (
      <div id='home' className='home'>
        <img className='home__shadow' src={shadow1} alt="shadow"/>
        <LazyLoadImage
          className='home__shadow'
          alt="shadow1"
          src={shadow1} />
        <img className='home__logo' src={logo_big_empty} alt="planque"/>
        <img className='home__la la-animation' src={la_big} alt="la"/>
        <img className='home__catch catch-animation' src={catch_phrase} alt="catch"/>
        {this.refreshAnims()}
      </div>
    )
  }
}

export default Home
