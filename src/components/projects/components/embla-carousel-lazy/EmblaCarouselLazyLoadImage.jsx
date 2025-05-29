// import React, { useState, useEffect } from "react";

// const PLACEHOLDER =
//   "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";

// export const LazyLoadImage = ({ imgSrc, inView, index }) => {
//   const [loaded, setLoaded] = useState(false);

//   // Load when in view
//   useEffect(() => {
//     if (inView) {
//       const img = new Image();
//       img.onload = () => setLoaded(true);
//       img.src = imgSrc;
//     }
//   }, [imgSrc, inView]);

//   return (
//     <div className="flex-none w-full pl-4 translate-z-0">
//       <div className="relative h-[12rem] sm:h-[16rem] md:h-[23rem] lg:h-[28rem] xl:h-[23rem]">
//         {!loaded && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <l-spiral size="40" speed="0.9" color="#0055FF" />
//           </div>
//         )}
//         <img
//           className={`block w-full h-full object-cover rounded-2xl transition-opacity duration-200 ${
//             loaded ? "opacity-100" : "opacity-0"
//           }`}
//           src={inView ? imgSrc : PLACEHOLDER}
//           alt={`slide ${index}`}
//         />
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";

export const LazyLoadImage = ({
  imgSrc,
  inView,
  index,
  expanded,
  heightClass,
}) => {
  const [loaded, setLoaded] = useState(false);

  // Load when in view
  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.onload = () => setLoaded(true);
      img.src = imgSrc;
    }
  }, [imgSrc, inView]);

  // Choose object-fit based on expanded state
  const fitClass = expanded ? "object-contain" : "object-cover";

  return (
    <div className={`flex-none w-full ${expanded ? "" : "pl-4"} translate-z-0`}>
      <div className={`relative ${heightClass}`}>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spiral size="40" speed="0.9" color="#0055FF" />
          </div>
        )}
        <img
          className={`block w-full h-full ${fitClass} rounded-2xl transition-opacity duration-200 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={inView ? imgSrc : PLACEHOLDER}
          alt={`slide ${index}`}
        />
      </div>
    </div>
  );
};
