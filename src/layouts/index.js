import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../css/fonts.css';
import '../css/shared.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Grade Barber & Shop - Manchester"
      meta={[
        { name: 'description', content: 'Precision fades and bespoke shaves.' },
        { name: 'keywords', content: 'grade barber manchester failsworth beard shave fade wash cut trim' },
      ]}
    >
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
