/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Menu, Friends } from '../../components'
import linkedin from '../../assets/images/linkedin.png'
import amies from '../../assets/images/picto_amies.png'
import instagram from '../../assets/images/instagram.png'
import './Header.css'

export class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      friends: false
    }
  }

  toggleFriends() {
    if (this.state.friends === false) {
      document.querySelector('html').scrollTop = 0
      document.querySelector('.friends').style.left = '0%'
      document.querySelector('body').style.overflowY = 'hidden'
      document.querySelector('.friends__cross').style.display = 'block'
      this.setState({
        friends: true
      })
    } else {
      document.querySelector('.friends').style.left = '100%'
      document.querySelector('.friends__cross').style.display = 'none'
      document.querySelector('body').style.overflowY = 'visible'
      this.setState({
        friends: false
      })
    }
  }

  render() {
    return (
      <div className='header'>
        <Friends/>
        <Menu/>
        <div className='socials'>
          <a href="">
            <img src={instagram} alt="instagram"/>
          </a>
          <span onClick={() => this.toggleFriends()} className='socials__amies'>
            <img src={amies} alt='amies'/>
          </span>
          <a href="">
            <img src={linkedin} alt="linkedin"/>
          </a>
        </div>
        <div className='friends__cross' onClick={() => this.toggleFriends()}>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Header
