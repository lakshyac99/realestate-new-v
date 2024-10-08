// import React from "react";
// import { AmenetiesType } from "../../data/Amenities";
// import { useAppStore } from "../../store/store";

// const ProcessAmeneties = () => {
//   const { placeAmeneties, setPlaceAmeneties } = useAppStore();

//   const addAmenety = (name) => {
//     setPlaceAmeneties([...placeAmeneties, name]);
//   };

//   const removeAmenty = (name) => {
//     const index = placeAmeneties.findIndex((amenetiy) => amenetiy === name);
//     if (index) {
//       const clonedAmenties = [...placeAmeneties];
//       clonedAmenties.splice(index, 1);
//       setPlaceAmeneties(clonedAmenties);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="flex flex-col gap-3">
//         <h2 className="font-semibold text-4xl">
//           Tell guests what your place has to offer
//         </h2>
//         <p>You can add more ameneties after you publish your listing.</p>
//         <div className="flex flex-col gap-5 max-h-[65vh] overflow-auto scroll no-scrollbar">
//           {AmenetiesType.map(({ type, data }) => (
//             <div key={type} className="flex flex-col gap-5">
//               {type === "advanced" && (
//                 <span className="text-lg font-medium">
//                   Do you have any standout ameneties?
//                 </span>
//               )}
//               {type === "safety" && (
//                 <span className="text-lg font-medium">
//                   Do you have any safety items?
//                 </span>
//               )}
//               <div className="grid grid-cols-3 gap-5">
//                 {data.map(({ name, svgPath }) => (
//                   <button
//                     key={name}
//                     className={`flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300
//                       ${
//                         placeAmeneties?.find((amentiy) => amentiy === name) &&
//                         "border-gray-950"
//                       }`}
//                     onClick={() =>
//                       placeAmeneties?.includes(name)
//                         ? removeAmenty(name)
//                         : addAmenety(name)
//                     }
//                   >
//                     {svgPath}
//                     <span className="text-airbnb-light-black font-medium">
//                       {name}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessAmeneties;



import React from "react";
import { AmenetiesType } from "../../data/Amenities";
import { useAppStore } from "../../store/store";

const ProcessAmeneties = () => {
  const { placeAmeneties = [], setPlaceAmeneties } = useAppStore(); // Default to an empty array

  const addAmenety = (name) => {
    if (!placeAmeneties.includes(name)) {
      setPlaceAmeneties([...placeAmeneties, name]);
    }
  };

  const removeAmenty = (name) => {
    const clonedAmenties = placeAmeneties.filter((amenetiy) => amenetiy !== name);
    setPlaceAmeneties(clonedAmenties);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Tell guests what your place has to offer
        </h2>
        <p>You can add more ameneties after you publish your listing.</p>
        <div className="flex flex-col gap-5 max-h-[65vh] overflow-auto scroll no-scrollbar">
          {AmenetiesType.map(({ type, data }) => (
            <div key={type} className="flex flex-col gap-5">
              {type === "advanced" && (
                <span className="text-lg font-medium">
                  Do you have any standout ameneties?
                </span>
              )}
              {type === "safety" && (
                <span className="text-lg font-medium">
                  Do you have any safety items?
                </span>
              )}
              <div className="grid grid-cols-3 gap-5">
                {data.map(({ name, svgPath }) => (
                  <button
                    key={name}
                    className={`flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300
                      ${
                        placeAmeneties.includes(name) && "border-gray-950"
                      }`}
                    onClick={() =>
                      placeAmeneties.includes(name)
                        ? removeAmenty(name)
                        : addAmenety(name)
                    }
                  >
                    {svgPath}
                    <span className="text-airbnb-light-black font-medium">
                      {name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessAmeneties;
