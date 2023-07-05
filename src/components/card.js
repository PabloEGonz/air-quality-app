import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Map from './map';
import Quality from './quality';

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <li className="card card-map">
      <Map lati={data.lat} lon={data.lon} />
      <div className="card-img-overlay">
        <button type="button" className="trigger" onClick={() => navigate(`/details/${data.name}`, { replace: true })}><h5 className="card-title">{`${data.name},  ${data.state}, ${data.country}`}</h5></button>
      </div>
      <Quality className="card-text card-footer" number={data.aqi} />
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
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
