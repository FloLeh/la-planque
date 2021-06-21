import React from 'react'
import './Mission.css'

export default function Mission(props) {
  return (
    <div className="mission">
      <div className="mission_img">
        <img src={props.image} alt={props.alt} data-aos-duration='800' data-aos='fade-up' data-aos-anchor-placement="top-center" data-aos-offset='-150' data-aos-delay={window.innerWidth > 640 ? props.delay : '100'}/>
      </div>
      <div>{props.text}</div>
    </div>
  )
}
