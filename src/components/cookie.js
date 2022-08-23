import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Cookie=() => {
    const containerStyle = {
        width: '50vw',
        height: '100vh'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
      
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDyB2y2VuABm-c4986ZjuLuFNxHjhSbbtg"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
}

export default Cookie;