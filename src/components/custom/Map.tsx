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
import { Icon, divIcon } from 'leaflet';
import CulinaryMarker from '@/assets/images/map-icons/culinary-marker.png';
import LodgingMarker from '@/assets/images/map-icons/lodging-marker.png';
import 'react-leaflet-markercluster/styles';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';

type Props = {
  culinary: CollectionEntry<'culinary'>[];
  lodgings: CollectionEntry<'lodgings'>[];
};

function Map({ culinary, lodgings }: Props) {
  const CulinaryIcon = new Icon({
    iconUrl: CulinaryMarker.src,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
  });

  const LodgingIcon = new Icon({
    iconUrl: LodgingMarker.src,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
  });

  // Create cluster icons
  const createCulinaryClusterIcon = (cluster: any) => {
    return L.divIcon({
      html: `<div style="background-color:rgba(255,140,0,0.8);border-radius:50%;color:black;display:flex;align-items:center;justify-content:center;width:38px;height:38px;"><span style="font-size:14px;">${cluster.getChildCount()}</span></div>`,
      className: 'culinary-cluster-icon',
      iconSize: L.point(44, 44, true),
    });
  };

  const createLodgingClusterIcon = (cluster: any) => {
    return L.divIcon({
      html: `<div style="background-color:rgba(0,123,255,0.8);border-radius:50%;color:black;display:flex;align-items:center;justify-content:center;width:38px;height:38px;"><span style="font-size:14px;">${cluster.getChildCount()}</span></div>`,
      className: 'lodging-cluster-icon',
      iconSize: L.point(44, 44, true),
    });
  };

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
            <LayerGroup>
              <MarkerClusterGroup
                iconCreateFunction={createCulinaryClusterIcon}
                disableClusteringAtZoom={18}
                showCoverageOnHover={false}
                spiderfyOnMaxZoom={false}
              >
                {culinary.map((place) => (
                  <Marker
                    key={`${place.data.id}`}
                    position={[place.data.lat, place.data.lng]}
                    icon={CulinaryIcon}
                  >
                    <Popup>{place.data.name}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Penginapan" checked>
            <LayerGroup>
              <MarkerClusterGroup
                iconCreateFunction={createLodgingClusterIcon}
                disableClusteringAtZoom={18}
                showCoverageOnHover={false}
                spiderfyOnMaxZoom={false}
              >
                {lodgings.map((place) => (
                  <Marker
                    key={`${place.data.id}`}
                    position={[place.data.lat, place.data.lng]}
                    icon={LodgingIcon}
                  >
                    <Popup>{place.data.name}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
