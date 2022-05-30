import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { token } from './config';
import icon from '../insta-icon.png';

import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { GeoJSONLayer } from "react-mapbox-gl";

const geojson = {
  "geojson-marker": {
    "type": "geojson",
    "data": {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.0323, 38.9131]
        },
        "properties": {
            "title": "Mapbox DC",
            "marker-symbol": "monument"
        }
    }
  }
};


<GeoJSONLayer
  data={geojson}
  symbolLayout={{
    "text-field": "{place}",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 0.6],
    "text-anchor": "top"
  }}
/>


const Mapbox = ReactMapboxGl({
  accessToken: token,
});

export const Map = () => {
  const [markers, setMarkers] = useState([]);

  const handleClick = (event) => {
    const coordinates = [event.lngLat.lng, event.lngLat.lat];
    console.log('coords', coordinates);

    setMarkers(prevValue => [...prevValue, coordinates]);
  };

  const geojson = {
    type: 'FeatureCollection',
    features: markers.map(coordinates => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates,
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    })),
  };

  console.log('markers: ', markers);
  return (
    <>
      <div onClick={handleClick}>TESTO</div>
      <div id="cont">
      </div>
      <Mapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '50vh',
          width: '100vw'
        }}
        onClick={(a, e) => {handleClick(e)}}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          <Popup
            coordinates={[-0.1987661557630247, 51.53937822528519]}
            offset={{
              'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}>
            <h1>Popup</h1>
          </Popup>
          {markers.map(loc => (
            <Marker coordinates={loc} key={Math.random()}>
              <div id="test" />
              asdf
              <img src={icon} />
            </Marker>
          ))}
        </Layer>
        <GeoJSONLayer data={geojson}
          symbolLayout={{
            "text-field": "{place}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
          }}
        />

      </Mapbox>
    </>
  );
};
