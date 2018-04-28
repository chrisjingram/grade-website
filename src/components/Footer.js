import React from 'react';
import Link from 'gatsby-link';

import bg from "../assets/footer/footer-bg.jpg";

import "../css/footer.css";

export default class Footer extends React.PureComponent{
  render(){

    return (
      <section id="footer" style={{ backgroundImage: 'linear-gradient(rgba(23, 23, 23, 0.8), rgba(23, 23, 23, 0.8)),url(' + bg + ')',
 backgroundPosition: 'center center' }}>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="copyright">&copy; Grade Barber & Shop 2018</div>

      </section>
    )

  }
}
