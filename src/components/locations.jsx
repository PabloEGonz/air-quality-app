import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/airqaSlice';

const Locations = ({ info }) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(addCity(info));
  };
  return (
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
        <button
          type="button"
          onClick={handleSelect}
        >
          Select
        </button>
      </div>
    </li>
  );
};
Locations.propTypes = {
  info: PropTypes.shape({
    country: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Locations;
