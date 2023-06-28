import React from 'react';
import PropTypes from 'prop-types';
import Map from './map';

const Card = ({ data }) => (
  <li className="card">
    <Map className="card-img" lati={data.lat} lon={data.lon} />
    <div className="card-img-overlay">
      <h5 className="card-title">{`${data.name},  ${data.state}, ${data.country}`}</h5>
    </div>
    <p className="card-text card-footer">{`The air quality is: ${data.aqi}`}</p>
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
