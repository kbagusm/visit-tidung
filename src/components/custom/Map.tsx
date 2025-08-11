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
import { Icon } from 'leaflet';
import CulinaryMarker from '@/assets/images/map-icons/culinary-marker.png';
import LodgingMarker from '@/assets/images/map-icons/lodging-marker.png';
import 'react-leaflet-markercluster/styles';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import { useEffect, useMemo, useState } from 'react';
import CulinaryDetail from './CulinaryDetail';
import LodgingDetail from './LodgingDetail';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';

type Props = {
  culinary: CollectionEntry<'culinary'>[];
  lodgings: CollectionEntry<'lodgings'>[];
};

function Map({ culinary, lodgings }: Props) {
  const CulinaryIcon = useMemo(
    () =>
      new Icon({
        iconUrl: CulinaryMarker.src,
        iconSize: [44, 44],
        iconAnchor: [22, 44],
      }),
    []
  );

  const LodgingIcon = useMemo(
    () =>
      new Icon({
        iconUrl: LodgingMarker.src,
        iconSize: [44, 44],
        iconAnchor: [22, 44],
      }),
    []
  );

  // State
  const [selectedPlace, setSelectedPlace] = useState<null | CollectionEntry<
    'culinary' | 'lodgings'
  >>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mapLoading, setMapLoading] = useState(true);


  // Auto-open drawer when place is selected on mobile
  useEffect(() => {
    if (selectedPlace && window.innerWidth < 768) {
      setDrawerOpen(true);
    }
  }, [selectedPlace]);

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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="h-[600px] overflow-y-scroll bg-gradient-to-br from-blue-50 to-teal-50 py-3 px-6 rounded-xl md:col-span-4 hidden md:block">
        {selectedPlace !== null ? (
          selectedPlace.collection === 'culinary' ? (
            // Culinary
            <CulinaryDetail culinary={selectedPlace} />
          ) : (
            // Lodging
            <LodgingDetail lodging={selectedPlace} />
          )
        ) : (
          <div className="flex justify-center items-center h-full text-center text-gray-700">
            <p>Pilih tempat untuk melihat detailnya</p>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerHeader className='hidden'>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-4 overflow-y-auto">
            {selectedPlace?.collection === 'culinary' ? (
              <CulinaryDetail culinary={selectedPlace} />
            ) : selectedPlace?.collection === 'lodgings' ? (
              <LodgingDetail lodging={selectedPlace} />
            ) : null}
          </div>
          <DrawerClose asChild>
            <Button variant="outline" className="m-4">
              Tutup
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>

      {/* Map */}
      <div
        className={`h-[600px] w-full shadow-md rounded-xl overflow-hidden md:col-span-8`}
      >
        {mapLoading && (
          <div className="flex items-center justify-center h-full w-full bg-white/80 z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}

        <MapContainer
          className="h-full w-full z-10"
          center={[-5.798777, 106.504525]}
          zoom={15}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            eventHandlers={{
              load: () => setMapLoading(false), // all tiles loaded
            }}
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
                      eventHandlers={{
                        click: () => {
                          setSelectedPlace(place);
                          if (window.innerWidth < 768) {
                            setDrawerOpen(true);
                          }
                        },
                      }}
                    >
                    </Marker>
                  ))}
                </MarkerClusterGroup>
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
