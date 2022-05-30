import { useEffect } from 'react';
import { token } from './config';
import mapboxgl from 'mapbox-gl';

export const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }, []);

  return (
    <div id="map" style={{width: '100%', height: '90vh'}}/>
  );
};
