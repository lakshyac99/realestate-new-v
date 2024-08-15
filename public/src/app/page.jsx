"use client";
import AuthModal from "../components/auth/AuthModal";
import Footer from "../components/footer/Footer";
import ListView from "../components/views/ListView";
import MapView from "../components/views/MapView";
import ViewSwitchBadge from "../components/views/ViewSwitchBadge";
import { listingTypes } from "../data/listingTypes";
import { getAllListingsAPI } from "../lib/lisitng";
import { useAppStore } from "../store/store";
import React, { useEffect } from "react";
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});


// import Navbar from "../components/navbar/Navbar";
import dynamic from "next/dynamic";

const page = () => {
  const { isAuthModalOpen, setListings, isMapView } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllListingsAPI();
      setListings(data);
    };
    getData();
  }, []);

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
      <ViewSwitchBadge />
      {isMapView ? <MapView /> : <ListView />}
      <Footer />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};

export default page;
