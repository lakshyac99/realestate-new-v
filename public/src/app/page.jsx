"use client";
import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ListView from "../components/views/ListView";
import AuthModal from "../components/auth/AuthModal";
import { useAppStore } from "../store/store";
import { getAllListingsAPI } from "../lib/lisitng";
import ViewSwitchBadge from "../components/views/ViewSwitchBadge";

const page = () => {
  const { isAuthModalOpen, setListings } = useAppStore();

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
      <ViewSwitchBadge />
      <ListView />
      <Footer />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};

export default page;
