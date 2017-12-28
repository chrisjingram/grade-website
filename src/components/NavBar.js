import React from 'react';
import Link from 'gatsby-link';

import "../css/nav.css";

export default class NavBar extends React.PureComponent{
  render(){

    return (
        <ul className="nav">

          <li><Link to="#">Grade</Link></li>
          <li><Link to="#">Barber</Link></li>
          <li><Link to="#">Shop</Link></li>
          <li><Link to="#">Book</Link></li>
          <li><Link to="#">Find Us</Link></li>

        </ul>
    )

  }
}
