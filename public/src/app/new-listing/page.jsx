"use client";
import AirBnbLogoShort from "../../svg/airbnb-logo-short";
import React, { useState } from "react";
import Overview from "../../components/process/Overview";
import ListingPlaceType from "../../components/process/ListingPlaceType";
import StepOneStarter from "../../components/process/StepOneStarter";
import PlaceLocation from "../../components/process/PlaceLocation";
import ListingTypeSelector from "../../components/process/ListingTypeSelector";
import PlaceDetails from "../../components/process/PlaceDetails";
import FloorPlan from "../../components/process/FloorPlan";
import StepTowStarter from "../../components/process/StepTwoStarter";
import ProcessAmeneties from "../../components/process/ProcessAmeneties";

const page = () => {
  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />;
      case 2:
        return <ListingTypeSelector />;
      case 3:
        return <ListingPlaceType />;
      case 4:
        return <PlaceLocation />;
      case 5:
        return <PlaceDetails />;
      case 6:
        return <FloorPlan />;
      case 7:
        return <StepTowStarter />;
      case 8:
        return <ProcessAmeneties />;
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="grid grid-rows-new-listing h-[100vh]">
      <header className="flex items-center px-20 justify-between">
        <div className="cursor-pointer">
          <AirBnbLogoShort />
        </div>
        {step <= 13 && (
          <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:border-gray-700 cursor-pointer">
            Save & Exit
          </button>
        )}
      </header>
      {getComponent()}
      <footer
        className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${
          step > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {step >= 1 && (
          <button
            className="py-3 mt-5 px-10 text-airbnb-light-black underline hover:bg-gray-200 text-base font-medium rounded-md cursor-pointer"
            onClick={handlePrevious}
          >
            Back
          </button>
        )}
        {step !== 0 ? (
          <button
            className="bg-[#222222] py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={handleNext}
          >
            Get Started
          </button>
        )}
      </footer>
    </div>
  );
};

export default page;
