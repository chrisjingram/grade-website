import React from 'react';
import Link from 'gatsby-link';

import Heading from "./Heading";

import "../css/shop.css";

import halfImage from "../assets/shop/shop-image.jpg";

export default class Shop extends React.PureComponent{
  render(){

    return (
      <section id="intro">

        <div className="flex-half">

          <div className="shop-text-container">
            <Heading textColour="#000000" smallText="Welcome" text="Grade Shop" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in </p>
          </div>

        </div>

        <div className="flex-half flex-half-image" style={{ backgroundImage: 'url(' + halfImage + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        </div>

      </section>
    )

  }
}
