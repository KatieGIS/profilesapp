import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  const center = [48.4284, -123.3656]; // Coordinates for Victoria's geographical center

  return (
    <MapContainer center={center} zoom={14} style={{ height: '40vh', width: '30vw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
      <Popup>
        Hello From Victoria BC Canada!
      </Popup>
    </Marker>
    </MapContainer>
  );
};
export default Location;