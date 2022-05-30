import { useEffect, useState, useRef } from 'react';
import icon from '../insta-icon.png';
import useDeepCompareEffect from 'use-deep-compare-effect'

export const Map = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [mapOptions, setMapOptions] = useState({});

  const onClick = (e) => {
    console.log('click', e);
    const { latLng } = e;
  };

  const onIdle = (e) => {
    console.log('idle', e);
  };

    // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions(mapOptions);
    }
  }, [map, mapOptions]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
}, [map, onClick, onIdle]);

  console.log('render map');
  useEffect(() => {
    if (ref.current && !map) {
      // https://stackoverflow.com/questions/11749742/google-maps-api-v3-gray-box-no-map
      var latlng = new window.google.maps.LatLng(-34.397, 150.644);
      var mapOptions = 
      {
          zoom: 8,
          center:latlng,
          //backgroundColor: '#ff0000',
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          //imageDefaultUI: true
          onClick: onClick,
      };
      setMap(new window.google.maps.Map(ref.current, mapOptions));
      setMapOptions(mapOptions);
    }
  }, [ref, map]);

  return (
    <div ref={ref} style={{height: '100vh', width: '100wv' }} />
  );
};
