import React from 'react'
import './Friends.css'
import amies from '../../assets/images/picto_amies.png'

export default function Friends() {
  return (
    <div className='friends'>
      <div className="friends__container">
        <div className="friends__left">
          <img src={amies} alt="amies"/>
          <span>les ami.e.s</span>
        </div>
        <div className="friends__right">
          Rabeb CHEKIR - Tunisie <br/>
          Gaëlle LOCHET - Rennes [35]<br/>
          <a href="http://xyz-architectes.fr/" target='blank'>xyz architectes - Paris [75]</a><br/>
          <a href="https://www.bconcept-createurdemagasin.com/" target='blank'>B.concept/créateur de magasin - Nantes [44]</a><br/>
          <a href="https://www.hilo-interieur.fr/" target='blank'>Hïlo/architecte intérieur - Angers [49]</a><br/>
          Casa deluxe FR/constructeur - Nantes [44]
        </div>
      </div>
    </div>
  )
}
