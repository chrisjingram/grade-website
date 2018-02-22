import React from 'react';
import Link from 'gatsby-link';

import "../css/heading.css";

export default class Heading extends React.PureComponent{
  render(){

    return (
      <div className="heading">

        <fieldset>

          <legend>Welcome</legend>
          <h2>Grade Barbers</h2>

        </fieldset>

      </div>
    )

  }
}
