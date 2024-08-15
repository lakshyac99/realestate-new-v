"use client";
import React, { useEffect } from "react";
import { useAppStore } from "../../store/store";
import { me } from "../../lib/auth";

const NavigationEvents = () => {
  const { userInfo, setUserInfo } = useAppStore();

  useEffect(() => {
    if (!userInfo) {
      const getData = async () => {
        const data = await me();
        setUserInfo(data);
      };
      getData();
    }
  }, [userInfo]);

  return null;
};

export default NavigationEvents;
