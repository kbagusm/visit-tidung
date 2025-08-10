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
import { useMemo, useState } from 'react';
import {
  Armchair,
  Banknote,
  Bath,
  House,
  MapPin,
  Notebook,
  Phone,
  ScrollText,
  Users,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

  const [selectedPlace, setSelectedPlace] = useState<null | CollectionEntry<
    'culinary' | 'lodgings'
  >>(null);

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
      <div className="h-[600px] overflow-y-scroll bg-gradient-to-br from-blue-50 to-teal-50 py-3 px-6 rounded-xl md:col-span-4">
        {selectedPlace !== null ? (
          selectedPlace.collection === 'culinary' ? (
            // Culinary
            <>
              <h3 className="text-lg font-semibold text-center">
                {selectedPlace.data.name}
              </h3>
            </>
          ) : (
            // Lodging
            <div>
              <h3 className="text-lg font-semibold text-center mb-3">
                {selectedPlace.data.name}
              </h3>
              {selectedPlace.data.images && selectedPlace.data.images.length > 0 ? (
                <Carousel>
                  <CarouselContent>
                    {selectedPlace.data.images.map((image, index) => (
                      <CarouselItem key={index} className="max-h-64">
                        <img
                          src={image.src}
                          alt={`${selectedPlace.data.name} ${index + 1}`}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-1" />
                  <CarouselNext className="right-1" />
                </Carousel>
              ) : (
                <div className='bg-gray-200 p-4 rounded-sm text-center'>
                  <p className='text-gray-700'>Tidak ada gambar</p>

                </div>
              )}
              <div className="mt-3 grid gap-4">
                {/* Address */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <MapPin size={18} /> Alamat
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedPlace.data.address ?? '-'}
                  </p>
                </div>

                {/* Type */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <House size={18} /> Tipe
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedPlace.data.type ?? '-'}
                  </p>
                </div>

                {/* Capacity */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <Users size={18} /> Kapasitas
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedPlace.data.capacity
                      ? selectedPlace.data.capacity + ' orang'
                      : '-'}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <Banknote size={18} /> Harga
                  </p>
                  {selectedPlace.data.lowerPrice &&
                  selectedPlace.data.upperPrice ? (
                    <p className="text-sm text-gray-600">
                      {selectedPlace.data.lowerPrice ===
                      selectedPlace.data.upperPrice
                        ? 'Rp' +
                          selectedPlace.data.lowerPrice.toLocaleString('id')
                        : 'Rp' +
                          selectedPlace.data.lowerPrice.toLocaleString('id') +
                          '—' +
                          'Rp' +
                          selectedPlace.data.upperPrice.toLocaleString('id')}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">Tidak diketahui</p>
                  )}
                </div>

                {/* Bathroom Type */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <Bath size={18} /> Tipe Kamar Mandi
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedPlace.data.bathroomType ?? '-'}
                  </p>
                </div>

                {/* Facilities */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <Armchair size={18} /> Fasilitas
                  </p>
                  <p className="text-sm text-gray-600">
                    <ul className="grid grid-cols-2 gap-1">
                      {selectedPlace.data.facilities &&
                      selectedPlace.data.facilities.length > 0 ? (
                        selectedPlace.data.facilities.map((facility, index) => (
                          <li key={index} className="list-disc list-inside">
                            {facility}
                          </li>
                        ))
                      ) : (
                        <li className="list-disc list-inside">-</li>
                      )}
                    </ul>
                  </p>
                </div>

                {/* Note */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <ScrollText size={18} /> Catatan
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedPlace.data.note ?? '-'}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-gray-600 font-semibold flex gap-2 items-center">
                    <Phone size={18} /> Telepon/WA
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedPlace.data.phone ?? '-'}
                  </p>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="flex justify-center items-center h-full text-center text-gray-700">
            <p>Pilih tempat untuk melihat detailnya</p>
          </div>
        )}
      </div>
      <div
        className={`h-[600px] w-full shadow-md rounded-xl overflow-hidden md:col-span-8`}
      >
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
                      eventHandlers={{
                        click: () => {
                          setSelectedPlace(place);
                        },
                      }}
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
                      eventHandlers={{
                        click: () => {
                          setSelectedPlace(place);
                        },
                      }}
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
    </div>
  );
}

export default Map;
