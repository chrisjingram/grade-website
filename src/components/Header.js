import React from 'react';
import Link from 'gatsby-link';

import headerBG from "../assets/header/header-bg.jpeg";
import logo from "../assets/header/logo.png";

import VerticalMiddle from "./VerticalMiddle";

import "../css/header.css";

export default class Header extends React.PureComponent{
  render(){

    return (
      <section id="header" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 0.81)),url(' + headerBG + ')',
 backgroundPosition: 'center center' }}>

       <VerticalMiddle>

        <img src={logo} className="logo" />
        <h2>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit</h2>
        <Link to="#" className="border-button">Book an appointment</Link>

      </VerticalMiddle>

      </section>
    )

  }
}
