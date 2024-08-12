"use client";
import React from "react";

import { IoMdClose } from "react-icons/io"

const AuthModal = () => {
  return <div className="relative z-50">
    <div className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="bg-white pb-4 pt-5">
              <div className="border-b border-b-gray-200 flex items-center justify-center relative pb-5">
                <span className="absolute left-5 cursor-pointer text-lg">
                  <IoMdClose />
                </span>
                <span>Login or Signup</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl pb-5">Welcome to AirBnb</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default AuthModal;
