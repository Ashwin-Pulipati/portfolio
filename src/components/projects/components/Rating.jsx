// import React, { useCallback, useEffect, useRef, useState } from "react";
// import {
//   RiExternalLinkLine,
//   RiStarSmileFill,
//   RiStarSmileLine,
// } from "react-icons/ri";
// import { createRipple } from "../../layouts/RippleEffect";
// import { useFeedback } from "./FeedbackContext";
// import {yellowStyles} from "../constants/LinksAndInterests.constants";

// function StarRating({ projectId, temporary = false }) {
//   const { getProjectFeedback, setRating } = useFeedback();
//   const { userRating, avgRating } = getProjectFeedback(projectId);

//   const [showFeedbackTooltip, setShowFeedbackTooltip] = useState(false);
//   const [showStars, setShowStars] = useState(!temporary);
//   const containerRef = useRef(null);
//   const feedbackLink = "https://forms.gle/GNTobAmSUap3n31P9";

//   const toggleStarsVisibility = useCallback(() => {
//     if (temporary) {
//       if (showFeedbackTooltip) {
//         setShowFeedbackTooltip(false);
//       }
//       setShowStars((prev) => !prev);
//     }
//   }, [temporary, showFeedbackTooltip]);

//   const handleStarClick = useCallback(
//     (star) => {
//       setRating(projectId, star);
//       setShowFeedbackTooltip(true);
//     },
//     [projectId, setRating]
//   );

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setShowFeedbackTooltip(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const FeedbackTooltipCard = (
//     <div
//       className="relative right-1/2 bottom-9"
//       onMouseDown={(e) => e.stopPropagation()}
//     >
//       <div
//         className={`whitespace-nowrap absolute left-1/2 bottom-full transform -translate-x-1/2 bg-bodyColor
//       text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded shadow-md
//       z-20 hover:text-green-300 dark:hover:text-green-600`}
//       >
//         <a
//           href={feedbackLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center hover:underline underline-offset-2"
//         >
//           <span className="text-white dark:text-black">Provide Feedback</span>
//           <RiExternalLinkLine className="ml-1 mt-0.5" />
//         </a>
//       </div>
//       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black dark:border-t-white z-20"></div>
//     </div>
//   );

//   const FeedbackTooltipDetail = (
//     <div
//       className="relative top-4 -left-[5%]"
//       onMouseDown={(e) => e.stopPropagation()}
//     >
//       <div
//         className={`whitespace-nowrap absolute left-1/2 top-full transform -translate-x-1/2 bg-black text-white dark:bg-white
//       dark:text-black text-sm px-2 py-1 rounded shadow-md z-20 hover:text-green-300 dark:hover:text-green-600`}
//       >
//         <a
//           href={feedbackLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center hover:underline underline-offset-2"
//         >
//           <span className="text-white dark:text-black">Provide Feedback</span>
//           <RiExternalLinkLine className="ml-1 mt-0.5" />
//         </a>
//       </div>
//       <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-black dark:border-b-white z-20"></div>
//     </div>
//   );

//   const filledStars = Math.round(avgRating);

//   const renderStar = (star) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 22 20"
//       className={`absolute w-4 h-4 ${
//         star <= filledStars ? yellowStyles.textLight : yellowStyles.textDim
//       }`}
//       fill="currentColor"
//       key={star}
//     >
//       <path
//         d={yellowStyles.starPath}
//         stroke="#ff5e00"
//         strokeWidth="1"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );

//   if (temporary) {
//     return (
//       <div
//         ref={containerRef}
//         className={`${yellowStyles.shadow} hover:shadow-none relative p-0.5 rounded-full flex items-center ${yellowStyles.bg} gradientBorderFullNoShadow`}
//       >
//         {showStars ? (
//           <div className={`relative ${yellowStyles.bg} rounded-full`}>
//             <div className="-z-10 absolute -inset-0.5 rounded-full appGradient opacity-60 blur"></div>
//             <div
//               className={`relative w-48 h-12 p-0.5 rounded-full ${yellowStyles.bg} flex justify-start items-center`}
//             >
//               <button
//                 className={`z-10 w-12 h-12 rounded-full ${yellowStyles.bg} flex justify-center items-center focus:outline-none`}
//                 onClick={toggleStarsVisibility}
//                 aria-label="Close"
//               >
//                 <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-200" />
//               </button>
//               <div className="flex gap-1 items-center">
//                 <div className="flex gap-1 justify-center items-center rounded-full text-white ">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <div
//                       key={star}
//                       className="relative w-4 h-4 cursor-pointer"
//                       onClick={() => handleStarClick(star)}
//                     >
//                       {renderStar(star)}
//                     </div>
//                   ))}
//                 </div>
//                 <span
//                   className={`rounded-full w-fit h-fit font-medium ${yellowStyles.text} text-sm pl-1`}
//                 >
//                   {avgRating.toFixed(1)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex items-center">
//             <button
//               className={`group z-10 w-12 h-12 rounded-full ${yellowStyles.bg} flex justify-center items-center focus:outline-none group/button ripple-container`}
//               onClick={toggleStarsVisibility}
//                 onMouseDown={createRipple}
//                 aria-label="Open"
//             >
//               {avgRating > 0 ? (
//                 <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-100" />
//               ) : (
//                 <>
//                   <RiStarSmileLine className="w-5 h-5 text-yellow-800 dark:text-yellow-100 group-hover/button:hidden" />
//                   <RiStarSmileFill className="w-5 h-5 hidden group-hover/button:inline text-orange-800 dark:text-orange-200" />
//                 </>
//               )}
//             </button>
//           </div>
//         )}
//         {userRating > 0 && showFeedbackTooltip && FeedbackTooltipCard}
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       <div
//         className={`ripple-container relative rounded-full ${yellowStyles.bg} ${yellowStyles.shadow} overflow-visible hover:shadow-none`}
//         onMouseDown={createRipple}
//       >
//         <div
//           ref={containerRef}
//           className="relative p-0.5 rounded-full flex items-center gradientBorderFullNoShadow cursor-pointer"
//         >
//           <div
//             className={`group relative w-48 h-12 p-0.5 rounded-full ${yellowStyles.bg} flex justify-start items-center hover:shadow-none`}
//           >
//             <button
//               className="z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none"
//               onClick={toggleStarsVisibility}
//               aria-label="Close"
//             >
//               {avgRating > 0 ? (
//                 <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-100 ml-0.5" />
//               ) : (
//                 <>
//                   <RiStarSmileLine className="w-5 h-5 text-yellow-800 dark:text-yellow-100 ml-0.5 group-hover:hidden" />
//                   <RiStarSmileFill className="w-5 h-5 hidden group-hover:inline text-orange-800 dark:text-orange-200 ml-0.5" />
//                 </>
//               )}
//             </button>
//             <div className="flex gap-1 items-center">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <div
//                   key={star}
//                   className="relative w-4 h-4 cursor-pointer"
//                   onClick={() => handleStarClick(star)}
//                 >
//                   {renderStar(star)}
//                 </div>
//               ))}
//               <span
//                 className={`rounded-full w-fit h-fit text-sm pl-1 font-bodyFont mt-0.5 ${yellowStyles.text}`}
//               >
//                 {avgRating.toFixed(1)}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {userRating > 0 && showFeedbackTooltip && FeedbackTooltipDetail}
//     </div>
//   );
// }

// export default React.memo(StarRating);



import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  RiExternalLinkLine,
  RiStarSmileFill,
  RiStarSmileLine,
} from "react-icons/ri";
import { createRipple } from "../../layouts/RippleEffect";
import { useFeedback } from "./FeedbackContext";
import { yellowStyles } from "../constants/LinksAndInterests.constants";

function StarRating({ projectId, temporary = false }) {
  const { getProjectFeedback, setRating } = useFeedback();
  const { userRating, avgRating } = getProjectFeedback(projectId);

  const [showFeedbackTooltip, setShowFeedbackTooltip] = useState(false);
  const [showStars, setShowStars] = useState(!temporary);
  const containerRef = useRef(null);
  const feedbackLink = "https://forms.gle/GNTobAmSUap3n31P9";

  const toggleStarsVisibility = useCallback(() => {
    if (temporary) {
      if (showFeedbackTooltip) {
        setShowFeedbackTooltip(false);
      }
      setShowStars((prev) => !prev);
    }
  }, [temporary, showFeedbackTooltip]);

  const handleStarClick = useCallback(
    (star) => {
      setRating(projectId, star);
      setShowFeedbackTooltip(true);
    },
    [projectId, setRating]
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowFeedbackTooltip(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const FeedbackTooltipCard = useMemo(
    () => (
      <div
        className="relative right-1/2 bottom-9"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className={`whitespace-nowrap absolute left-1/2 bottom-full transform -translate-x-1/2 bg-bodyColor text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded shadow-md z-20 hover:text-green-300 dark:hover:text-green-600`}
        >
          <a
            href={feedbackLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline underline-offset-2"
          >
            <span className="text-white dark:text-black">Provide Feedback</span>
            <RiExternalLinkLine className="ml-1 mt-0.5" />
          </a>
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black dark:border-t-white z-20"></div>
      </div>
    ),
    []
  );

  const FeedbackTooltipDetail = useMemo(
    () => (
      <div
        className="relative top-4 -left-[5%]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className={`whitespace-nowrap absolute left-1/2 top-full transform -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded shadow-md z-20 hover:text-green-300 dark:hover:text-green-600`}
        >
          <a
            href={feedbackLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline underline-offset-2"
          >
            <span className="text-white dark:text-black">Provide Feedback</span>
            <RiExternalLinkLine className="ml-1 mt-0.5" />
          </a>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-black dark:border-b-white z-20"></div>
      </div>
    ),
    []
  );

  const filledStars = useMemo(() => Math.round(avgRating), [avgRating]);

  const renderStar = useCallback(
    (star) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 20"
        className={`absolute w-4 h-4 ${
          star <= filledStars ? yellowStyles.textLight : yellowStyles.textDim
        }`}
        fill="currentColor"
        key={star}
      >
        <path
          d={yellowStyles.starPath}
          stroke="#ff5e00"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    ),
    [filledStars]
  );

  if (temporary) {
    return (
      <div
        ref={containerRef}
        className={`${yellowStyles.shadow} hover:shadow-none relative p-0.5 rounded-full flex items-center ${yellowStyles.bg} gradientBorderFullNoShadow`}
      >
        {showStars ? (
          <div className={`relative ${yellowStyles.bg} rounded-full`}>
            <div className="-z-10 absolute -inset-0.5 rounded-full appGradient opacity-60 blur"></div>
            <div
              className={`relative w-48 h-12 p-0.5 rounded-full ${yellowStyles.bg} flex justify-start items-center`}
            >
              <button
                className={`z-10 w-12 h-12 rounded-full ${yellowStyles.bg} flex justify-center items-center focus:outline-none`}
                onClick={toggleStarsVisibility}
                aria-label="Close"
              >
                <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-200" />
              </button>
              <div className="flex gap-1 items-center">
                <div className="flex gap-1 justify-center items-center rounded-full text-white ">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className="relative w-4 h-4 cursor-pointer"
                      onClick={() => handleStarClick(star)}
                    >
                      {renderStar(star)}
                    </div>
                  ))}
                </div>
                <span
                  className={`rounded-full w-fit h-fit font-medium ${yellowStyles.text} text-sm pl-1`}
                >
                  {avgRating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <button
              className={`group z-10 w-12 h-12 rounded-full ${yellowStyles.bg} flex justify-center items-center focus:outline-none group/button ripple-container`}
              onClick={toggleStarsVisibility}
              onMouseDown={createRipple}
              aria-label="Open"
            >
              {avgRating > 0 ? (
                <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-100" />
              ) : (
                <>
                  <RiStarSmileLine className="w-5 h-5 text-yellow-800 dark:text-yellow-100 group-hover/button:hidden" />
                  <RiStarSmileFill className="w-5 h-5 hidden group-hover/button:inline text-orange-800 dark:text-orange-200" />
                </>
              )}
            </button>
          </div>
        )}
        {userRating > 0 && showFeedbackTooltip && FeedbackTooltipCard}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`ripple-container relative rounded-full ${yellowStyles.bg} ${yellowStyles.shadow} overflow-visible hover:shadow-none`}
        onMouseDown={createRipple}
      >
        <div
          ref={containerRef}
          className="relative p-0.5 rounded-full flex items-center gradientBorderFullNoShadow cursor-pointer"
        >
          <div
            className={`group relative w-48 h-12 p-0.5 rounded-full ${yellowStyles.bg} flex justify-start items-center hover:shadow-none`}
          >
            <button
              className="z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none"
              onClick={toggleStarsVisibility}
              aria-label="Close"
            >
              {avgRating > 0 ? (
                <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-100 ml-0.5" />
              ) : (
                <>
                  <RiStarSmileLine className="w-5 h-5 text-yellow-800 dark:text-yellow-100 ml-0.5 group-hover:hidden" />
                  <RiStarSmileFill className="w-5 h-5 hidden group-hover:inline text-orange-800 dark:text-orange-200 ml-0.5" />
                </>
              )}
            </button>
            <div className="flex gap-1 items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="relative w-4 h-4 cursor-pointer"
                  onClick={() => handleStarClick(star)}
                >
                  {renderStar(star)}
                </div>
              ))}
              <span
                className={`rounded-full w-fit h-fit text-sm pl-1 font-bodyFont mt-0.5 ${yellowStyles.text}`}
              >
                {avgRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {userRating > 0 && showFeedbackTooltip && FeedbackTooltipDetail}
    </div>
  );
}

export default React.memo(StarRating);
