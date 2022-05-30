import React from 'react';
import icon from '../pon4.png';
import white from '../white.png';

export const Marker = ({ map, position, key, date }) => {
  const [marker, setMarker] = React.useState();

  const [options, setOptions] = React.useState({
    icon,
    map,
    position,
    key
    //draggable: true,
  });

  const handleMouseEnter = (e) => {
    setOptions(prevState => ({
      ...prevState,
      label: `${date}`,
      icon: white,
    }));
  };

  const handleMouseLeave = (e) => {
    setOptions(prevState => ({
      ...prevState,
      label: '',
      icon: icon,
    }));
  };

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      window.google.maps.event.addListener(marker, 'mouseover', handleMouseEnter);
      window.google.maps.event.addListener(marker, 'mouseout', handleMouseLeave);

      return () => {
        window.google.maps.event.clearListeners(marker, 'mouseover');
        window.google.maps.event.clearListeners(marker, 'mouseout');
      }
    }
  });

  return null;
};
