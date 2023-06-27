import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  console.log(data);
  return (
    <li key={data.lat}>{data.country}</li>
  );
};

Card.prototype = {
  data: PropTypes.shape({
    aqi: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
  }),
};
export default Card;
