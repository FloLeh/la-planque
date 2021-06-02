import React from 'react'
import './Friends.css'
import amies from '../../assets/images/picto_amies.png'

export default function Friends() {
  return (
    <div className='friends hide_mobile'>
      <div className="friends__container">
        <div className="friends__left">
          <img src={amies} alt="amies"/>
          <span>les ami.e.s</span>
        </div>
        <div className="friends__right">
          Rabeb CHEKIR - Tunisie <br/>
          Gaëlle LOCHET - Rennes [35]<br/>
          xyz architectes - Paris [75]<br/>
          B.concept/créateur de magasin - Nantes [44]<br/>
          Hïlo/architecte intérieur - Angers [49]<br/>
          Casa deluxe FR/constructeur - Nantes [44]
        </div>
      </div>
    </div>
  )
}
