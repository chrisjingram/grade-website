import React from 'react';
import Link from 'gatsby-link';

import sectionBG from "../assets/services/services-section-bg.jpg";

import VerticalMiddle from "./VerticalMiddle";
import Heading from "./Heading";

import "../css/services.css";

export default class Services extends React.PureComponent{
  render(){

    return (
      <section id="services" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.81)),url(' + sectionBG + ')',
 backgroundPosition: 'center center' }}>

        <Heading textColour="#FFFFFF" smallText="View" text="Our Services" />

      </section>
    )

  }
}
