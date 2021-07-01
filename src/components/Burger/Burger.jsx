import React from 'react'
import './Burger.css'

class Burger extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor, index) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const element = document.querySelector(this.getAttribute('href')).getBoundingClientRect().top
        window.scrollTo({
            top: element + window.pageYOffset,
            behavior: 'smooth'
        })
      })
    })

    document.querySelector('.lines').addEventListener('click', () => {
      this.toggleMenu()
    })

  }

  toggleMenu(visible = this.state.visible) {
    if (!visible) {
      document.querySelector('.burger__menu').classList.add('visible')
      this.setState({
        visible: true
      })
    } else {
      document.querySelector('.burger__menu').classList.remove('visible')
      this.setState({
        visible: false
      })
    }
  }
  render() {
    return (
      <div className='burger hide_desktop'>
        <div className="lines">
          <span></span>
          <span className='wave'></span>
          <span></span>
        </div>
        <div className="burger__menu">
          <nav>
            <ul>
              <li><a href="#missions">MISSIONS</a><span></span></li>
              <li><a href="#projets">PROJETS</a><span></span></li>
              <li><a href="#collectif">COLLECTIF</a><span></span></li>
              <li><a href="#contact">SE RENCONTRER</a><span></span></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
  
}

export default Burger
