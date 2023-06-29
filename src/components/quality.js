import React from 'react';
import PropTypes from 'prop-types';
import '../styles/quality.css';

const Quality = ({ number }) => {
  if (number === 1) {
    return (
      <div className="good quality">The air quality is Good</div>
    );
  } if (number === 2) {
    return (
      <div className="fair quality">The air quality is Fair</div>
    );
  }
  if (number === 3) {
    return (
      <div className="moderate quality">The air quality is Moderate</div>
    );
  }
  if (number === 4) {
    return (
      <div className="poor quality">The air quality is Poor</div>
    );
  }
  if (number === 5) {
    return (
      <div className="vpoor quality">The air quality is Very Poor</div>
    );
  }
  return (
    <div className="vpoor quality">The air quality is Very Poor</div>
  );
};

Quality.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Quality;
