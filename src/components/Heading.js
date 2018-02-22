import React from 'react';
import Link from 'gatsby-link';

import "../css/heading.css";

export default class Heading extends React.PureComponent{
  render(){

    return (
      <div className="heading">

        <fieldset>

          <legend style={{ color: this.props.textColour }}>{this.props.smallText}</legend>
          <h2 style={{ color: this.props.textColour }}>{this.props.text}</h2>

        </fieldset>

      </div>
    )

  }
}
