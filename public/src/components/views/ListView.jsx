import React from "react";
import { useAppStore } from "../../store/store";
import ListingCard from "../listingCard";

const ListView = () => {
  const { listings } = useAppStore();
  return (
    <div className="grid grid-cols-5 h-[85vh] px-20 gap-10 py-10 justify-start items-start">
      {listings?.map((listing, index) => (
        <ListingCard key={index} data={listing} />
      ))}
    </div>
  );
};

export default ListView;
