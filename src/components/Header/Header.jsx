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
    this.toggleFriends = this.toggleFriends.bind(this)
  }

  toggleFriends(friends = this.state.friends) {
    if (!friends) {
      document.querySelector('.friends').style.left = '0%'
      document.querySelector('body').style.overflowY = 'hidden'
      document.querySelector('.friends__cross').style.display = 'flex'
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
        <Menu friends={this.state.friends} handleClick={() => this.toggleFriends(true)}/>
        <div className='socials'>
          <a href="https://www.instagram.com/la.planque__/" target='blank'>
            <img src={instagram} alt="instagram"/>
          </a>
          <span onClick={() => this.toggleFriends()} className='socials__amies'>
            <img src={amies} alt='amies'/>
          </span>
          <a href="https://www.linkedin.com/company/la-planque-rep%C3%A8re-d-architectes/about/?viewAsMember=true" target='blank'>
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
