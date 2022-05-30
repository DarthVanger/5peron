import { useEffect, useState, useRef } from 'react';
import icon from '../insta-icon.png';

export const Map = () => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  console.log('render map');
  useEffect(() => {
    if (ref.current && !map) {
      console.log('set map');
      console.log('ref.current: ', ref.current);
      // https://stackoverflow.com/questions/11749742/google-maps-api-v3-gray-box-no-map
      var latlng = new window.google.maps.LatLng(-34.397, 150.644);
      var mapOptions = 
      {
          zoom: 8,
          center:latlng,
          //backgroundColor: '#ff0000',
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          //imageDefaultUI: true
      };
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    }
  }, [ref, map]);

  //useEffect(() => {
  //  setTimeout(() => {
  //    if (ref.current && !map) {
  //      console.log('set map');
  //      setMap(new window.google.maps.Map(ref.current, {}));
  //      setTimeout(() => {
  //        window.google.maps.event.trigger(map, 'resize');
  //      }, 1000);
  //    }
  //  }, 2000);
  //}, [map]);

  return (
    <div ref={ref} style={{height: '100vh', width: '100wv' }} />
  );
};
