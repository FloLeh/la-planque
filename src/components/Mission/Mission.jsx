import React from 'react'
import './Mission.css'

export default function Mission(props) {
  return (
    <div className="mission">
      <img src={props.image} alt={props.alt} data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay={props.delay}/>
      <div>{props.text}</div>
    </div>
  )
}
