import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useAppStore } from "../../store/store";

const ViewSwitchBadge = () => {
  const { isMapView, setIsMapView } = useAppStore();

  return (
    <div className="fixed flex justify-center items-center bottom-16 left-0 right-0 cursor-pointer">
      <div
        className="bg-black p-4 text-white rounded-full"
        onClick={() => setIsMapView()}
      >
        <span className="flex items-center gap-2 text-sm">
          {!isMapView ? (
            <>
              Show Map <BsFillMapFill />
            </>
          ) : (
            <>
              Show List <AiOutlineUnorderedList />
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default ViewSwitchBadge;
