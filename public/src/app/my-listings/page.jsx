"use client";
import React, { useEffect } from "react";
const Navbar = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false,
});

import dynamic from "next/dynamic";
import Footer from "../../components/footer/Footer";
import { useAppStore } from "../../store/store";
import { getSearchListing, getUserListings } from "../../lib/lisitng";
import ListingCard from "../../components/listingCard";
import CompactFooter from "../../components/footer/CompactFooter";

const page = () => {
  const { userInfo, userListings, setUserListings } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserListings(userInfo?.id);
      console.log({ data });
      setUserListings(data);
    };
    if (userInfo) {
      getData();
    }
  }, [userInfo, setUserListings]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-start items-start">
        {userListings.length > 0 ? (
          <div className="grid grid-cols-4 px-10 gap-3 py-10 w-full items-start">
            {userListings?.map((listing, index) => (
              <ListingCard data={listing} isMyListing key={index} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h1>No Listings for current user. Create new Listings.</h1>
          </div>
        )}
      </div>
      <CompactFooter />
    </div>
  );
};

export default page;
