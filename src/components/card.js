import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  console.log(data);
  return (
    <li>{data.country}</li>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    aqi: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
