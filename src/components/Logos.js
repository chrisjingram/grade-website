import React from 'react';
import Link from 'gatsby-link';

import sectionBG from "../assets/services/services-section-bg.jpg";

import americancrew from "../assets/logos/american-crew-wide.png";
import barbercouncil from "../assets/logos/barber-council.png";
import bedheadtigi from "../assets/logos/bed-head-tigi.png";
import britishbarbersassociation from "../assets/logos/british-barbers-association.png";
import britishmasterbarbers from "../assets/logos/british-master-barbers.png";
import elegance from "../assets/logos/elegance.png";
import fudge from "../assets/logos/fudge.png";

import "../css/logos.css";

export default class Logos extends React.PureComponent{
  render(){

    return (
      <section id="logos">

        <div className="logo-imgs">

          <img className="logo-img" src={americancrew} />
          <img className="logo-img" src={barbercouncil} />
          <img className="logo-img" src={bedheadtigi} />
          <img className="logo-img" src={britishbarbersassociation} />
          <img className="logo-img" src={britishmasterbarbers} />
          <img className="logo-img" src={elegance} />
          <img className="logo-img" src={fudge} />

        </div>

      </section>
    )

  }
}
