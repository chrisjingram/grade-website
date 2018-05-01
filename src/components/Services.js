import React from 'react';
import Link from 'gatsby-link';

import sectionBG from "../assets/services/services-section-bg.jpg";

import scissors from "../assets/services/scissors-icon.png";
import clippers from "../assets/services/clippers-icon.png";
import head from "../assets/services/head-icon.png";
import razor from "../assets/services/razor-icon.png";
import beard from "../assets/services/beard-icon.png";
import tie from "../assets/services/tie-icon.png";
import comb from "../assets/services/comb-icon.png";
import tube from "../assets/services/tube-icon.png";

import VerticalMiddle from "./VerticalMiddle";
import Heading from "./Heading";

import ServiceBlock from "./ServiceBlock";

import "../css/services.css";

export default class Services extends React.PureComponent{
  render(){

    return (
      <section id="services" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.81)),url(' + sectionBG + ')',
 backgroundPosition: 'center center' }}>

        <Heading textColour="#FFFFFF" smallText="View" text="Our Services" />

        <div className="services-blocks">

          <ServiceBlock icon={scissors} title="Wash, Cut & Style">Standard <strong>£12.50</strong><br />Bald fade <strong>£15</strong></ServiceBlock>
          <ServiceBlock icon={clippers} title="Buzz Cut">Standard <strong>£10</strong><br />Fade <strong>£12.50</strong></ServiceBlock>
          <ServiceBlock icon={head} title="Youth Cut">Standard <strong>£10</strong><br />Bald Fade <strong>£12.50</strong></ServiceBlock>
          <ServiceBlock icon={comb} title="Shape Up Edges">Classic <strong>£10</strong></ServiceBlock>

        </div>

        <div className="services-blocks">

          <ServiceBlock icon={beard} title="Beard">Classic <strong>£7.50</strong></ServiceBlock>
          <ServiceBlock icon={razor} title="Shave">Steam Shave <strong>£15</strong><br />Hot Towel Shave <strong>£15</strong></ServiceBlock>
          <ServiceBlock icon={tie} title="Executive Shave">Executive <strong>£20</strong></ServiceBlock>
          <ServiceBlock icon={tube} title="Face">Express Facial <strong>£10</strong><br />Executive Facial <strong>£15</strong></ServiceBlock>

        </div>

      </section>
    )

  }
}
