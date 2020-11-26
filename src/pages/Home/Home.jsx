import React, { Component } from 'react'
import './Home.css'
import logo_big_catch from '../../assets/images/logo_big_catch.png'
import shadow1 from '../../assets/images/shadow1.png'

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <img className='home__shadow' src={shadow1} alt="shadow"/>
        <img className='home__logo' src={logo_big_catch} alt="la planque"/>
      </div>
    )
  }
}

export default Home
