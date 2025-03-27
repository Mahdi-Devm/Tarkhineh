import {  MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'


import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ایمپورت تصاویر به صورت مستقیم
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react'

// رفع مشکل آیکون‌ها
const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  
const Map = () => {
    const [position, setPosition] = useState<L.LatLng>(L.latLng(35.6892, 51.3890)); // تهران
  const [coordinates, setCoordinates] = useState<string>('');
  const handleGetCoordinates = (latlng: L.LatLng) => {
    setPosition(latlng);
    setCoordinates(`عرض جغرافیایی: ${latlng.lat.toFixed(6)}, طول جغرافیایی: ${latlng.lng.toFixed(6)}`);
  };
  


    const CenterMarker = ({ getCoordinates }: { getCoordinates: (latlng: L.LatLng) => void }) => {
        const map = useMapEvents({
          move() {
            const center = map.getCenter();
            getCoordinates(center);
          },
          load() {
            const center = map.getCenter();
            getCoordinates(center);
          }
        });
      
        return (
          <Marker position={map.getCenter()}>
            <Popup>موقعیت فعلی مرکز نقشه</Popup>
          </Marker>
        );
      }

    
  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CenterMarker getCoordinates={handleGetCoordinates}/>
    </MapContainer>
  )
}

export default Map