import Image from "next/image";
import React from "react";

const ListingCard = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-1 flex-col">
      <div className="flex items-center justify-center cursor-pointer w-full">
        <div className="flex flex-col gap-2">
          <div className="relative w-64 h-56">
            <Image
              src={data.photos[0]}
              fill
              alt="listing"
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h3>{data.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
