import React from 'react';
import PropTypes from 'prop-types';
import Map from './map';

const CardDetails = ({ data }) => (
  <li className="details row">
    <Map className="" lati={data.lat} lon={data.lon} />
    <div className="details-body">
      <h5 className="">{`${data.name},  ${data.state}, ${data.country}`}</h5>
      <p className="">{`The air quality is: ${data.aqi}`}</p>
      <span>
        Carbon Monoxide
        {`${data.comp.co}`}
      </span>
      <span>
        Nitrogen Monoxidee
        {`${data.comp.no}`}
      </span>
      <span>
        Nitrogen Dioxide
        {`${data.comp.no2}`}
      </span>
      <span>
        Ozone
        {`${data.comp.o3}`}
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
    state: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comp: PropTypes.object.isRequired,
  }).isRequired,
};
export default CardDetails;
