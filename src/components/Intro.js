import React from 'react';
import Link from 'gatsby-link';

import VerticalMiddle from "./VerticalMiddle";
import Heading from "./Heading";

import "../css/intro.css";

import introImage from "../assets/intro/intro-image.jpg";

export default class Intro extends React.PureComponent{
  render(){

    return (
      <section id="intro">

        <div className="flex-half flex-half-image" style={{ backgroundImage: 'url(' + introImage + ')', backgroundPosition: 'top center', backgroundSize: 'cover' }}>

        </div>

        <div className="flex-half">

          <div className="intro-text-container">
            <Heading textColour="#000000" smallText="Welcome" text="Grade Barbers" />
            <p>A five star master barber experience for gentlemen seeking high-grade  precision fades and bespoke shaves.</p>
            <Link to="#" className="border-button">Book an appointment</Link>
          </div>

        </div>

      </section>
    )

  }
}
