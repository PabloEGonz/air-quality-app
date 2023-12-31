import React from 'react';
import PropTypes from 'prop-types';
import Map from './map';
import Quality from './quality';

const CardDetails = ({ data }) => (
  <li className="details">
    <Map lati={data.lat} lon={data.lon} />
    <div className="details-body d-flex flex-column">
      <h5 className="">{`${data.name},  ${data.state}, ${data.country}`}</h5>
      <Quality className="card-text card-footer" number={data.aqi} />
      <span>
        Carbon Monoxide: &nbsp;
        {` ${data.comp.co}`}
      </span>
      <span>
        Nitrogen Monoxidee: &nbsp;
        {` ${data.comp.no}`}
      </span>
      <span>
        Nitrogen Dioxide: &nbsp;
        {` ${data.comp.no2}`}
      </span>
      <span>
        Ozone: &nbsp;
        {` ${data.comp.o3}`}
      </span>
    </div>
  </li>
);

CardDetails.propTypes = {
  data: PropTypes.shape({
    aqi: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    state: PropTypes.string,
    name: PropTypes.string.isRequired,
    comp: PropTypes.shape({
      co: PropTypes.number.isRequired,
      no: PropTypes.number.isRequired,
      no2: PropTypes.number.isRequired,
      o3: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default CardDetails;
