import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "../../store/store";
import Confetti from "react-confetti";
import { createListingAPI } from "../../lib/lisitng";

const ListingCreated = () => {
  const router = useRouter();
  const {
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmeneties,
    photos,
    title,
    description,
    price,
  } = useAppStore();

  useEffect(() => {
    createListingAPI({
      locationType:locationType.name,
      placeType:placeType.title,
      mapData,
      locationData,
      placeSpace,
      placeAmeneties,
      photos,
      title,
      description,
      price,
      listingCreatedBy: { id: userInfo?.id },
    });
  }, [
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmeneties,
    photos,
    title,
    description,
    price,
  ]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Congratulations!</h2>
        <p>You have successfully created your listing!</p>
        <div className="flex gap-5">
          <button
            className="bg-[#222222] py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/")}
          >
            Visit Home Page
          </button>

          <button
            className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/my-listings")}
          >
            View your listings
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default ListingCreated;
