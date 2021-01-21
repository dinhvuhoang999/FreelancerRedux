import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const Banner = ({ title, subtitle, img }) => (

  <div className="container-fluid d-flex align-items-center flex-column">

    <img className="avatar" src={img} alt="" />

    <h1 className="masthead-heading text-uppercase mb-0 mt-2">{title}</h1>
    <div className="divider-custom divider-light">
      <hr className="line-left" />
      <i className="fas fa-star" />
      <hr className="line" />
    </div>
    <h4 className="masthead-subheading font-weight-light mb-0">{subtitle}</h4>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default Banner;
