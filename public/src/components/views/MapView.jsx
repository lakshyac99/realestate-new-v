import React, { useMemo, useState } from "react";
import { useAppStore } from "../../store/store";
import Map, { Marker, Popup } from "react-map-gl";
import Pin from "../common/Pin";
import ListingCard from "../listingCard";

const MapView = () => {
  
  const { listings } = useAppStore();

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(() =>
    listings.map((data, index) => (
      <Marker
        key={`maker-${index}`}
        longitude={data.mapData.longitude}
        latitude={data.mapData.latitude}
        anchor="top"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo(data);
        }}
      >
        <Pin />
      </Marker>
    ))
  );

  return (
    <div className="h-[72.5vh] max-w[100vh] pt-2">
      <Map
        initialViewState={{
          longitude: 72.5714,
          latitude: 23.0225,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.mapData.longitude)}
            latitude={Number(popupInfo.mapData.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <ListingCard data={popupInfo}/>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapView;
