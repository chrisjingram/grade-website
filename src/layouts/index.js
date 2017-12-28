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
      title="Grade Barbers"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
