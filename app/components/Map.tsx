"use client"
import React from 'react'
import L from 'leaflet'
import { MapContainer,Marker,TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
(L.Icon.Default.prototype as any)._getIconUrl = undefined;
const customIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png", // Corrected path
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

interface MapProps {
  center?:number[]
}
const Map:React.FC<MapProps> = ({center}) =>{
  return (
    <MapContainer 
    center={center as L.LatLngExpression || [51.505, -0.09]} 
    zoom={center ? 4 : 2} 
    scrollWheelZoom={true} 
    className="h-[35vh] rounded-lg">
      <TileLayer
      // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      center && (
        <Marker position={center as L.LatLngExpression} icon={customIcon}/>
      )
    }
    </MapContainer>
  )
}

export default Map;
