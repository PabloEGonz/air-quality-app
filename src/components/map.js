import PropTypes from 'prop-types';
import '../styles/map.css';
import { Map as Maps } from 'pigeon-maps';

const Map = ({ lati, lon }) => (
  <div className="map-wrap">
    <Maps className="map" defaultCenter={[lati, lon]} defaultZoom={11} />
  </div>
);

Map.propTypes = {
  lati: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};
export default Map;
