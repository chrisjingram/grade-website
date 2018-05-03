import React from 'react';
import Link from 'gatsby-link';

import Header from "../components/Header";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Shop from "../components/Shop";
import Logos from "../components/Logos";
import BookNow from "../components/BookNow";
import OpeningHours from "../components/OpeningHours";
import Footer from "../components/Footer";

export default class IndexPage extends React.PureComponent{


  render(){
    return (
      <div>
        <Header />
        <Intro />
        <Services />
        <Logos />
        <BookNow />
        <OpeningHours />
        <Footer />
      </div>
    )
  }

}
