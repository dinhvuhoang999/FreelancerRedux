import React from 'react';

import PropTypes from 'prop-types';
import './style.css';

const Hero = ({ children }) => (
  <header className="container-fluid">
    <div className="row">
      <div className="col-sm-12" id="masthead">
        {children}
      </div>
    </div>
  </header>
);

Hero.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Hero;
