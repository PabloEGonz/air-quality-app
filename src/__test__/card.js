import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => (
  <li className="card">
    <div className="card-img-overlay">
      <h5 className="card-title">{`${data.name},  ${data.state}, ${data.country}`}</h5>
    </div>
  </li>
);

Card.propTypes = {
  data: PropTypes.shape({
    aqi: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;