import React, { useMemo } from "react";
import { useAppStore } from "../../../../store/store";
import { Map, Marker } from "react-map-gl";
import Pin from "../../../../components/common/Pin";

const ListingMap = () => {
  const { currentListing } = useAppStore();
  const pins = useMemo(() => {
    return (
      <Marker
        longitude={currentListing.mapData.longitude}
        latitude={currentListing.mapData.latitude}
      >
        <Pin />
      </Marker>
    );
  }, [currentListing]);

  return (
    <div className="h-96 w-full">
      <Map
        initialViewState={{
          longitude: currentListing.mapData.longitude,
          latitude: currentListing.mapData.latitude,
          zoom: 13,
        }}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {pins}
      </Map>
    </div>
  );
};

export default ListingMap;
