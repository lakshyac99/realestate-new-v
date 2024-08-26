"use client";
import React, { useEffect } from "react";
import { useAppStore } from "../../store/store";
import { me } from "../../lib/auth";
import { usePathname } from "next/navigation";

const NavigationEvents = () => {
  const pathName = usePathname();
  const {
    setInitialView,
    setCurrentListing,
    setShowScheduleBar,
    showScheduleBar,
    setUserInfo,
    userInfo,
  } = useAppStore();

  useEffect(() => {
    setInitialView();
    setCurrentListing(undefined);
    if (!userInfo) {
      const getData = async () => {
        const data = await me();
        setUserInfo(data);
      };
      getData();
    }
  }, [
    pathName,
    setInitialView,
    showScheduleBar,
    setShowScheduleBar,
    setCurrentListing,
    setUserInfo,
    userInfo,
  ]);

  return null;
};

export default NavigationEvents;
