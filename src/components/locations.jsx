import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';

const Locations = ({ info }) => (
  <li className="card">
    <div className="card-body">
      <h2>
        {`${info.name},  ${info.state}, ${info.country}` }
      </h2>
      <ReactCountryFlag
        className="flag"
        countryCode={info.country}
        svg
        style={{
          width: '3em',
          height: '3em',
        }}
      />
      <p>
        <span>{info.lat}</span>
        <span>{info.lon}</span>
      </p>
    </div>
  </li>
);
Locations.propTypes = {
  info: PropTypes.shape({
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Locations;
