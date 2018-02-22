import React from 'react';
import Link from 'gatsby-link';

import Header from "../components/Header";
import Intro from "../components/Intro";
import Services from "../components/Services";

export default class IndexPage extends React.PureComponent{

  render(){
    return (
      <div>
        <Header />
        <Intro />
        <Services />
      </div>
    )
  }

}
