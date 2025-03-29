import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface Props {
  setCoordinates: (coords: { latitude: string; longitude: string }) => void
}

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

const LocationMarker = ({
  setMarkerPosition,
}: {
  setMarkerPosition: (latlng: L.LatLng) => void
}) => {
  const [position, setPosition] = useState<L.LatLng | null>(null)

  useMapEvents({
    click(e) {
      setPosition(e.latlng)
      setMarkerPosition(e.latlng)
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>موقعیت انتخاب شده</Popup>
    </Marker>
  )
}

const Map = ({ setCoordinates }: Props) => {
  const initialCenter = L.latLng(35.6892, 51.389) // تهران
  const [markerPosition, setMarkerPosition] = useState<L.LatLng | null>(null)

  const handleLogCoordinates = () => {
    if (markerPosition) {
      const coords = {
        latitude: markerPosition.lat.toFixed(6),
        longitude: markerPosition.lng.toFixed(6),
      }

      setCoordinates(coords)

      toast.success(
        `مختصات ذخیره شد:\nعرض جغرافیایی: ${coords.latitude}\nطول جغرافیایی: ${coords.longitude}`,
      )
    } else {
      // تغییر alert به toast
      toast.error('لطفاً ابتدا یک نقطه روی نقشه انتخاب کنید')
    }
  }

  return (
    <div className="relative">
      <MapContainer
        center={initialCenter}
        zoom={13}
        style={{ height: '350px', width: '100%', zIndex: '2' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker setMarkerPosition={setMarkerPosition} />
      </MapContainer>

      <button
        onClick={handleLogCoordinates}
        className="absolute bottom-2 z-50 rounded-lg bg-blue-900 px-4 py-2 text-white"
      >
        ثبت مختصات
      </button>
    </div>
  )
}

export default Map
