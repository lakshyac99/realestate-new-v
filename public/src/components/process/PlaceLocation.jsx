import React from "react";
import GeocoderControl from "./geocoder-control";
import { Map } from "react-map-gl";
import { useAppStore } from "../../store/store";
// import ControlPanel from "./";

const PlaceLocation = () => {
  const { setMapData, setLocationData } = useAppStore();

  const getResults = ({ result }) => {
    // console.log({result})
    const [longitude, latitude] = result?.geometry?.coordinates;
    const data = {
      landmark: result?.text,
      neighnorhood: "",
      postcode: "",
      locality: "",
      place: "",
      district: "",
      region: "",
      country: "",
    };
    result?.context?.forEach((item) => {
      Object.keys(data)?.forEach((key) => {
        if (item?.id?.startsWith(key + ".")) {
          data[key] = item?.text;
        }
      });
    });
    setMapData({ longitude, latitude });
    setLocationData({ ...data });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <p>
        Your address is only shared with guests after they've made a
        reservation.
      </p>
      <div className="h-[40px] w-[700px]">
        <Map
          initialViewState={{
            longitude: -79.4512,
            latitude: 43.6568,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            position="top-left"
            marker={true}
            onLoading={() => {}}
            onResults={() => {}}
            onResult={getResults}
            onError={() => {}}
          />
        </Map>
      </div>
    </div>
  );
};

export default PlaceLocation;
