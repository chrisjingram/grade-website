import React from 'react';
import Link from 'gatsby-link';

import VerticalMiddle from "./VerticalMiddle";
import Heading from "./Heading";

import "../css/intro.css";

export default class Intro extends React.PureComponent{
  render(){

    return (
      <section id="intro">

        <div className="flex-half image">

        </div>

        <div className="flex-half">

          <div className="intro-text-container">
            <Heading textColour="#000000" smallText="Welcome" text="Grade Barbers" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in </p>
            <Link to="#" className="border-button">Book an appointment</Link>
          </div>

        </div>

      </section>
    )

  }
}
