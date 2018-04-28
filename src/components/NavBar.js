import React from 'react';
import Link from 'gatsby-link';

import "../css/nav.css";

export default class NavBar extends React.PureComponent{

  componentDidMount(){
    console.log("IndexPage componentDidMount");
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        console.log(anchor);
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: "start",
                inline: "nearest"
            });
        });
    });
  }

  render(){

    return (
        <ul className="nav">

          <li><a href="#header">Grade</a></li>
          <li><a href="#intro">Barber</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#book-now">Book</a></li>
          <li><a href="#opening-hours">Find Us</a></li>

        </ul>
    )

  }
}
