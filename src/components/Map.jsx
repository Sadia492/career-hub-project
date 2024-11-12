import React, { useEffect } from "react";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  // This component centers the map on given coordinates after the map has loaded
  function SetViewOnLoad({ coords }) {
    const map = useMap();
    useEffect(() => {
      map.setView(coords, 10); // Set zoom to 15
    }, [map, coords]);
    return null;
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <MapContainer
        center={[23.777176, 90.399452]}
        zoom={10}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          maxWidth: "1000px", // max width for larger screens
          height: "500px", // fixed height for map display
          margin: "0 auto", // center alignment
        }}
        whenCreated={(map) => map.invalidateSize()} // Fix for sizing issues on load
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Main Marker Position */}
        <Marker position={[23.777176, 90.399452]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        {/* Center Map on Load */}
        <SetViewOnLoad coords={[23.777176, 90.399452]} />
      </MapContainer>
    </div>
  );
}
