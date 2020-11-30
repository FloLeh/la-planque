import React, { Component } from 'react'
import './Projet.css'

export class Projet extends Component {
  render() {
    return (
      <div className='projet'>
        <div className="projet__bottom">
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default Projet
