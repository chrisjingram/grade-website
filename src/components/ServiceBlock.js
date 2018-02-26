import React from 'react';
import Link from 'gatsby-link';

import VerticalMiddle from "./VerticalMiddle";

import "../css/services.css";

export default class ServiceBlock extends React.PureComponent{
  render(){

    return (
      <div className="service-block">
        <img src={this.props.icon} />
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    )

  }
}
