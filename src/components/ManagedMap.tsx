import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { isDomAvailable } from "../utils/dom";

const position = [51.505, -0.09];

export default function ManagedMap() {
  if (!isDomAvailable()) {
    return (
      <div>
        <p className="map-loading">Loading map...</p>
      </div>
    );
  }

  return (
    <Map center={position} zoom={13} style={{ height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}
