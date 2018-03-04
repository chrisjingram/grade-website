import React from 'react';
import Link from 'gatsby-link';

import Heading from "./Heading";

import "../css/opening-hours.css";

export default class OpeningHours extends React.PureComponent{
  render(){

    return (
      <section id="opening-hours">

        <div className="flex-half left-col">

          <div className="opening-hours-text-container">
            <Heading textColour="#FFFFFF" smallText="View Our" text="Opening Hours" />
            <p>MONDAY to FRIDAY<br />09:00 - 20:00</p>
            <p>SATURDAY<br />10:00 - 18:00</p>
            <p>SUNDAY<br />11:00 - 18:00</p>
          </div>

        </div>

        <div className="flex-half flex-half-image">

          <iframe
            frameBorder="0" style={{margin: 0, width: "100%", height: "100%", border: 0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYKEyKMhCzFL8tnV_PErHQpQGkqtrs4uE&q=Grade+Barber+%26+Shop,Manchester" allowFullscreen>
          </iframe>

        </div>

      </section>
    )

  }
}
