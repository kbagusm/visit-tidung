import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import type { CollectionEntry } from 'astro:content';
import 'leaflet/dist/leaflet.css';

type Props = {
  culinary: CollectionEntry<'culinary'>[];
  lodgings: CollectionEntry<'lodgings'>[];
};

function Map({ culinary, lodgings }: Props) {
  return (
    <div className="h-[600px] border-2 rounded-xl overflow-hidden relative">
      <MapContainer
        className="h-full w-full z-10"
        center={[-5.798777, 106.504525]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="UMKM Kuliner" checked>
            <LayerGroup >
              {culinary.map((place) => (
                <Marker key={`${place.data.id}`} position={[place.data.lat, place.data.lng]} >
                  <Popup>{place.data.name}</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Penginapan" checked>
            <LayerGroup>
              {lodgings.map((place) => (
                <Marker key={`${place.data.id}`} position={[place.data.lat, place.data.lng]}>
                  <Popup>{place.data.name}</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
