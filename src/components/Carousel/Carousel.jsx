import React from 'react'
import Flickity from "react-flickity-component"
import './Carousel.css'
import 'flickity/css/flickity.css'

const flickityOptions = {
  wrapAround: true,
  arrowShape: { 
    x0: 15,
    x1: 55, y1: 40,
    x2: 55, y2: 35,
    x3: 20
  }
}

export default function Carousel() {
  return (
    <div className='carousel'>
      <Flickity options={flickityOptions}>
        <img src="https://loremflickr.com/800/480" alt='' />
        <img src="https://loremflickr.com/800/480/kittens" alt='' />
        <img src="https://loremflickr.com/800/480/kitten" alt='' />
      </Flickity>
    </div>
  )
}
