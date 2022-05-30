import React, { useEffect, useState, useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from './Map';
import { Marker } from './Marker';

const apiKey = 'AIzaSyA2UDFg1D25cvlIZICfzo9peR4cfoxo_Lg';

const render = (status) => {
  return <h1>{status}</h1>;
};

export const GoogleWrapper  = () => {
  const [clicks, setClicks] = React.useState([]);
  const [zoom, setZoom] = React.useState(3); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <Map
        center={center}
        onClick={onClick}
        onIdle={onIdle}
        zoom={zoom}
      >
        {clicks.map((latLng, i) => (<Marker key={i} position={latLng} />))}
      </Map>
    </Wrapper>
  );
};
