import React from 'react';
import Link from 'gatsby-link';

import bg from "../assets/booknow/book-now-bg.jpg";

import Heading from "./Heading";

import "../css/book-now.css";

export default class BookNow extends React.PureComponent{
  render(){

    return (
      <section id="book-now" style={{ backgroundImage: 'linear-gradient(rgba(23, 23, 23, 0.5), rgba(23, 23, 23, 0.5)),url(' + bg + ')',
 backgroundPosition: 'center center' }}>

        <div><Heading textColour="#FFFFFF" smallText="" text="Book Now" /></div>
        <div><a href="https://gradebarbershop.resurva.com" className="border-button" target="_blank">Book an appointment</a></div>

      </section>
    )

  }
}
