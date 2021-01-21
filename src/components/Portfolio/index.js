import React from 'react';
import PropTypes from 'prop-types';

import Por from '../Por';

import './style.css';

function Portfolio(props) {
  const { error, loading, results } = props;
  if (error) {
    return (
      <div>
        Error!
        {error.message}
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container" id="PORTFOLIO">
        <h1 className="title pt-5 pb-5">PORTFOLIO</h1>
        <div className="row justify-content-center">
          <div className="row">
            {results.map((result) => <Por key={result} {...result} />)}
          </div>
        </div>
      </div>
    </>
  );
}
Portfolio.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
};
export default Portfolio;
