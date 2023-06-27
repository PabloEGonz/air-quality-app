import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  console.log(data);
  return (
    <li>
      <h5>{data.state}</h5>
      <p>{`The air quality is: ${data.aqi}`}</p>
      <p>{data.country}</p>
    </li>
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
