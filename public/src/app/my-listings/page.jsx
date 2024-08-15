"use client";
import React, { useEffect } from "react";
const Navbar = dynamic(() => import("../../components/navbar/Navbar"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import Footer from "../../components/footer/Footer";
import { useAppStore } from "../../store/store";
import { getUserListings } from "../../lib/lisitng";
import ListingCard from "../../components/listingCard";

const page = () => {
  const { userInfo, userListings, setUserListings } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserListings(userInfo.id);
      console.log({ data });
      setUserListings(data);
    };
    if (userInfo) {
      getData();
    }
  }, [userInfo]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-start items-start">
        <div className="grid grid-cols-4 px-10 gap-3 py-10 w-full items-start">
          {userListings.map((listing, index) => (
            <ListingCard data={listing} isMyListing key={listing.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
