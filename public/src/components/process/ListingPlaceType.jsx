import React from "react";
import House from "../../svg/lisitngTypes/house";
import Room from "../../svg/lisitngTypes/room";
import SharedRoom from "../../svg/lisitngTypes/shared-room";
import { useAppStore } from "../../store/store";

const ListingPlaceType = () => {
  const { placeType, setPlaceType } = useAppStore();

  const data = [
    {
      title: "An entire place.",
      subtitle: "Guests have the whole place to themselves.",
      svg: <House />,
    },
    {
      title: "A room",
      subtitle:
        "Guests have their own room in a home, plus access to shared spaces.",
      svg: <Room />,
    },
    {
      title: "A shared room.",
      subtitle:
        "Guests sleep in a room or common area that may be shared with you or other.",
      svg: <SharedRoom />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full gap-10">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <ul className="flex flex-col gap-5 w-[800px]">
        {data.map((place) => (
          <li
            key={place.title}
            className={`flex border border-gray-300 rounded-md p-7 justify-between hover:border-gray-500 transition-all duration-300 cursor-pointer
            ${
              place.title === placeType?.title && "border-gray-950 bg-slate-100"
            }  
            `}
            onClick={() => setPlaceType(place)}
          >
            <div>
              <h4 className="font-semibold">{place.title}</h4>
              <p>{place.subtitle}</p>
            </div>
            {place.svg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingPlaceType;
