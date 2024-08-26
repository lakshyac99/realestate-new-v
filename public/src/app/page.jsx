"use client";
import AuthModal from "../components/auth/AuthModal";
import CompactFooter from "../components/footer/CompactFooter";
import ListView from "../components/views/ListView";
import MapView from "../components/views/MapView";
import ViewSwitchBadge from "../components/views/ViewSwitchBadge";
import { listingTypes } from "../data/listingTypes";
import { getAllListings, getUserWishlists } from "../lib/lisitng";
import { useAppStore } from "../store/store";
import React, { useEffect } from "react";
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});

import { me } from "../lib/auth";
import dynamic from "next/dynamic";

const page = () => {
  const {
    isAuthModalOpen,
    setUserInfo,
    listings,
    setListings,
    isMapView,
    userInfo,
    wishlists,
    setWishLists,
  } = useAppStore();
  useEffect(() => {
    const getUser = async () => {
      const data = await me();
      setUserInfo(data);
    };
    getUser();
  }, [setUserInfo]);

  useEffect(() => {
    const getData = async () => {
      // console.log({ setWishLists });
      const data = await getAllListings();
      setListings(data);
      const wishlists = await getUserWishlists(userInfo?.id);
      const wishListsId = wishlists?.map(({ listing }) => listing.id);
      setWishLists(wishListsId);
    };
    getData();
  }, [setListings, setWishLists, userInfo?.id]);

  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[90vw] overflow-auto no-scrollbar mt-3 px-5">
          <ul className="flex gap-5 h-full">
            {listingTypes.map((data) => (
              <li
                key={data.name}
                className="w-max flex flex-col items-center justify-betweeb h-16 cursor-pointer"
              >
                <span className="h-10  w-10 flex items-center justify-center">
                  {data.svgPath}
                </span>
                <div
                  className="text-xs font-semibold break-keep"
                  style={{ width: "inherit" }}
                >
                  {data.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMapView ? <MapView /> : <ListView />}
      <ViewSwitchBadge />
      <CompactFooter />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};

export default page;
