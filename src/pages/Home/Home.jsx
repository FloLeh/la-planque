import React, { Component } from 'react'
import './Home.css'
import logo_big_catch from '../../assets/images/logo_big_catch.png'

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <img src={logo_big_catch} alt="la planque"/>
      </div>
    )
  }
}

export default Home
