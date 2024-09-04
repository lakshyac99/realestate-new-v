"use client";
import AuthModal from "../../components/auth/AuthModal";
import CompactFooter from "../../components/footer/CompactFooter";
const Navbar = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false,
});

import React, { useEffect } from "react";
import SearchMap from "./components/SearchMap";
import { getAllListings, getSearchListing } from "../../lib/lisitng";
import ListingCard from "../../components/listingCard";
import dynamic from "next/dynamic";
import { useAppStore } from "../../store/store";
import ListView from "../../components/views/ListView";

export default function Page() {
  const {
    isAuthModalOpen,
    setListings,
    // searchLocation,
    setSearchListings,
    // searchListings,
    listings,
  } = useAppStore();
  useEffect(() => {
    const getData = async () => {
      const data = await getAllListings();
      setListings(data);
    };
    getData();
  }, [setSearchListings]);
  return (
    <div>
      <Navbar />
      <div
        className="grid h-[82.5vh]"
        style={{ gridTemplateColumns: "0.6fr 0.4fr" }}
      >
        <div className=" h-[82.5vh] overflow-auto no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-4 md:px-20 gap-16 py-10 h-[75vh] overflow-auto no-scrollbar">
            {/* {searchListings?.map((listing, index) => (
              <ListingCard data={listing} key={index} />
            ))} */}
            {listings?.map((listing, index) => (
              <ListingCard key={index} data={listing} />
            ))}
          </div>
        </div>
        <div className="">
          <SearchMap />
        </div>
      </div>
      {/* <div className="grid grid-cols-5 h-[85vh] px-20 gap-10 py-10 justify-start items-start">
        {listings?.map((listing, index) => (
          <ListingCard key={index} data={listing} />
        ))}
      </div> */}

      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
