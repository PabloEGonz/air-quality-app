import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import PropTypes from 'prop-types';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/map.css';

const Map = ({ lati, lon }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(lon);
  const [lat] = useState(lati);
  const [zoom] = useState(7);
  const [API_KEY] = useState('hHGuceOvDE9b4YEn0rQq');

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/14fd2d7c-3688-48fd-ab68-7d7cbd4075da/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom,
    });
  }, [API_KEY, lng, lat, zoom]);
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

Map.propTypes = {
  lati: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};
export default Map;
