import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

function Maps({address}) {
    const [mapCenter, setMapCenter] = useState(null);
    useEffect(() => {
        if (address) {
          // Utiliza la dirección para establecer el centro del mapa
          setMapCenter({ lat: address.latitude, lng: address.longitude });
        }
      }, [address]);

  return (
    <GoogleMap
    center={mapCenter} zoom={8}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
      <InfoWindow position={{ lat: -34.397, lng: 150.644 }}>
        <div>
          <h3>InfoWindow content</h3>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}

export default Maps;