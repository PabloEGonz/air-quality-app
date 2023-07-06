import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCity, removeCity } from '../redux/airqaSlice';

const Locations = ({ info, action }) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    if (action === 'add') dispatch(addCity(info));
    else dispatch(removeCity(info.name));
  };
  return (
    <li className="card card-loc">
      <div className="card-body">
        <h2>
          {info.state ? `${info.name},  ${info.state}, ${info.country}` : `${info.name}, ${info.country}`}
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
        {action === 'add' ? (
          <button
            type="button"
            onClick={handleSelect}
          >
            Add
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSelect}
          >
            Remove
          </button>
        )}
      </div>
    </li>
  );
};
Locations.propTypes = {
  info: PropTypes.shape({
    country: PropTypes.string.isRequired,
    state: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.string.isRequired,
};

export default Locations;
