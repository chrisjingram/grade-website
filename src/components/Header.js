import React from 'react';
import Link from 'gatsby-link';

import headerBG from "../assets/header/header-bg.jpeg";
import logo from "../assets/header/logo.png";

import "../css/header.css";

export default class Header extends React.PureComponent{
  render(){

    return (
      <section id="header" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)),url(' + headerBG + ')',
 backgroundPosition: 'center center' }}>

        <img src={logo} className="logo" />

        <h2>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit</h2>

      </section>
    )

  }
}
