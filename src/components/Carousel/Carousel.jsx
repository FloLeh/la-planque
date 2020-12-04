import React from 'react'
import Flickity from "react-flickity-component"
import './Carousel.css'

import 'flickity/css/flickity.css'

export default function Carousel() {
  return (
    <div className='carousel'>
      <Flickity >
        <img src="https://loremflickr.com/800/480" alt='' />
        <img src="https://loremflickr.com/800/480/kittens" alt='' />
        <img src="https://loremflickr.com/800/480/kitten" alt='' />
      </Flickity>
    </div>
  )
}
