import React from 'react';
import Link from 'gatsby-link';

import sectionBG from "../assets/services/services-section-bg.jpg";

import scissors from "../assets/services/scissors-icon.png";
import clippers from "../assets/services/clippers-icon.png";
import head from "../assets/services/head-icon.png";
import razor from "../assets/services/razor-icon.png";

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

          <ServiceBlock icon={scissors} title="Scissor Cut" description="Lorem ipsum dolor sit amet, consectur" />
          <ServiceBlock icon={razor} title="Razor Cut" description="Lorem ipsum dolor sit amet, consectur" />
          <ServiceBlock icon={head} title="Head Shave" description="Lorem ipsum dolor sit amet, consectur" />
          <ServiceBlock icon={clippers} title="Clipper Cut" description="Lorem ipsum dolor sit amet, consectur" />

        </div>

        <div className="services-blocks">

          <ServiceBlock icon={scissors} title="Scissor Cut" description="Lorem ipsum dolor sit amet, consectur" />
          <ServiceBlock icon={razor} title="Razor Cut" description="Lorem ipsum dolor sit amet, consectur" />
          <ServiceBlock icon={head} title="Head Shave" description="Lorem ipsum dolor sit amet, consectur" />
          <ServiceBlock icon={clippers} title="Clipper Cut" description="Lorem ipsum dolor sit amet, consectur" />

        </div>

      </section>
    )

  }
}
