import React from "react";
import { useAppStore } from "../../store/store";

const Description = () => {
  const { description, setDescription } = useAppStore();
  return (
    <div className="flex items-center justify-center h-full text-airbnb-light-black">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Create your description.</h2>
          <p>Share what makes your place special.</p>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            className="border border-gray-400 h-56 w-[550px] rounded-lg active:border-gray-950 no-scrollbar p-6 text-4xl"
            value={description}
            onChange={(e) => {
              if (e.target.value.length <= 500) {
                setDescription(e.target.value);
              }
            }}
          />
          <span>{description.length}/500</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
