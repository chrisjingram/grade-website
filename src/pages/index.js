import React from 'react';
import Link from 'gatsby-link';

import Header from "../components/header";
import Intro from "../components/intro";

export default class IndexPage extends React.PureComponent{

  render(){
    return (
      <div>
        <Header />
        <Intro />
      </div>
    )
  }

}
