import React, { useEffect, useState, useRef } from 'react';
import icon from '../insta-icon.png';
import useDeepCompareEffect from 'use-deep-compare-effect'

export const Map = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

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

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // https://developers.google.com/maps/documentation/javascript/react-map#javascript_1
  return (
    <>
      <div ref={ref} style={{height: '100vh', width: '100wv' }} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};
