import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  RiStarSmileLine,
  RiStarSmileFill,
  RiExternalLinkLine,
} from "react-icons/ri";
import { useFeedback } from "./FeedbackContext"; // adjust the path as needed
import { createRipple } from "../../layouts/RippleEffect";

function StarRating({ projectId, temporary = false}) {
  const { getProjectFeedback, setRating /*removeRating*/ } = useFeedback();
  const { userRating, avgRating } = getProjectFeedback(projectId);

  // Local state for tooltip visibility and star panel in temporary mode.
  const [showFeedbackTooltip, setShowFeedbackTooltip] = useState(false);
  const [showStars, setShowStars] = useState(!temporary);
  const containerRef = useRef(null);
  const feedbackLink = "https://forms.gle/GNTobAmSUap3n31P9"; // update with your feedback link

  // Toggle the star panel visibility (and hide tooltip if open) in temporary mode.
  const toggleStarsVisibility = useCallback(() => {
    if (temporary) {
      if (showFeedbackTooltip) {
        setShowFeedbackTooltip(false);
      }
      setShowStars((prev) => !prev);
    }
  }, [temporary, showFeedbackTooltip]);

  // When a star is clicked, update the rating and show the tooltip.
  const handleStarClick = useCallback(
    (star) => {
      setRating(projectId, star);
      setShowFeedbackTooltip(true);
    },
    [projectId, setRating]
  );

  // Hide tooltip when clicking outside.
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowFeedbackTooltip(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tooltip elements (customize styling/positioning as needed)
  const FeedbackTooltipCard = (
    <div className="relative right-1/2 bottom-9">
      <div className="whitespace-nowrap absolute left-1/2 bottom-full transform -translate-x-1/2 bg-bodyColor 
      text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded shadow-md
      z-20 hover:text-green-300 dark:hover:text-green-600">
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
  );

  const FeedbackTooltipDetail = (
    <div className="relative top-4 -left-[5%]">
      <div className="whitespace-nowrap absolute left-1/2 top-full transform -translate-x-1/2 bg-black text-white dark:bg-white 
      dark:text-black text-sm px-2 py-1 rounded shadow-md z-20 hover:text-green-300 dark:hover:text-green-600">
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
  );

  // Calculate the number of filled stars based on the average rating.
  const filledStars = Math.round(avgRating);

  // Temporary (compact/expandable) mode.
  if (temporary) {
    return (
      <div
        ref={containerRef}
        className="shadow-md shadow-yellow-400 dark:shadow-yellow-500 hover:shadow-none relative p-0.5 rounded-full flex items-center bg-yellow-100 dark:bg-yellow-800 hover:bg-gradient-to-r 
        focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]"
      >
        {showStars ? (
          <div className="relative bg-yellow-100 dark:bg-yellow-800 rounded-full">
            <div
              className="-z-10 absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
            opacity-60 blur"
            ></div>
            <div className="relative w-48 h-12 p-0.5 rounded-full bg-yellow-100 dark:bg-yellow-800 flex justify-start items-center">
              <button
                className="z-10 w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-800 flex justify-center items-center focus:outline-none"
                onClick={toggleStarsVisibility}
              >
                <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-200" />
              </button>
              {/* Rating Stars */}
              <div className="flex gap-1 items-center">
                <div className="flex gap-1 justify-center items-center rounded-full text-white ">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className="relative w-4 h-4 cursor-pointer"
                      onClick={() => handleStarClick(star)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                        className={`absolute w-4 h-4 ${
                          star <= filledStars
                            ? "text-orange-300 dark:text-yellow-200"
                            : "text-white"
                        }`}
                        fill="currentColor"
                      >
                        <path
                          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                          stroke="#ff5e00"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="rounded-full w-fit h-fit font-medium text-orange-800 dark:text-orange-100 text-sm pl-1">
                  {avgRating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <button
              className="group z-10 w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-800 flex justify-center items-center focus:outline-none group/button ripple-container"
                onClick={toggleStarsVisibility}
                onMouseDown={createRipple}
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

  // Non-temporary (always-visible) mode.
  return (
    // <div
    //   // OUTER WRAPPER with the full yellow shadow
    //   className="relative rounded-full bg-yellow-100 dark:bg-yellow-800 shadow-md shadow-yellow-400 dark:shadow-yellow-500 overflow-visible hover:shadow-none ripple-container"
    //   onMouseDown={createRipple}
    // >
    //   <div
    //     // INNER gradient container
    //     ref={containerRef}
    //     className="relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] cursor-pointer"
    //   >
    //     <div className="group relative w-48 h-12 p-0.5 rounded-full bg-yellow-100 dark:bg-yellow-800 flex justify-start items-center hover:shadow-none">
    //       <button
    //         className="z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none"
    //         onClick={toggleStarsVisibility}
    //       >
    //         {avgRating > 0 ? (
    //           <RiStarSmileFill className="w-5 h-5 text-orange-800 dark:text-orange-100 ml-0.5" />
    //         ) : (
    //           <>
    //             <RiStarSmileLine className="w-5 h-5 text-yellow-800 dark:text-yellow-100 ml-0.5 group-hover:hidden" />
    //             <RiStarSmileFill className="w-5 h-5 hidden group-hover:inline text-orange-800 dark:text-orange-200 ml-0.5" />
    //           </>
    //         )}
    //       </button>
    //       <div className="flex gap-1 items-center">
    //         {[1, 2, 3, 4, 5].map((star) => (
    //           <div
    //             key={star}
    //             className="relative w-4 h-4 cursor-pointer"
    //             onClick={() => handleStarClick(star)}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 22 20"
    //               className={`absolute w-4 h-4 ${
    //                 star <= filledStars
    //                   ? "text-orange-300 dark:text-yellow-200"
    //                   : "text-white"
    //               }`}
    //               fill="currentColor"
    //             >
    //               <path
    //                 d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
    //                 stroke="#ff5e00"
    //                 strokeWidth="1"
    //                 strokeLinejoin="round"
    //               />
    //             </svg>
    //           </div>
    //         ))}
    //         <span className="rounded-full w-fit h-fit text-sm pl-1 font-bodyFont mt-0.5 text-orange-800 dark:text-orange-100">
    //           {avgRating.toFixed(1)}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   {userRating > 0 && showFeedbackTooltip && FeedbackTooltipDetail}
    // </div>

    <div className="relative">
      {/* This div handles ripple and styling */}
      <div
        className="ripple-container relative rounded-full bg-yellow-100 dark:bg-yellow-800 shadow-md shadow-yellow-400 dark:shadow-yellow-500 overflow-visible hover:shadow-none"
        onMouseDown={createRipple}
      >
        {/* Inner content with stars and average */}
        <div
          ref={containerRef}
          className="relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] cursor-pointer"
        >
          <div className="group relative w-48 h-12 p-0.5 rounded-full bg-yellow-100 dark:bg-yellow-800 flex justify-start items-center hover:shadow-none">
            <button
              className="z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none"
              onClick={toggleStarsVisibility}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 20"
                    className={`absolute w-4 h-4 ${
                      star <= filledStars
                        ? "text-orange-300 dark:text-yellow-200"
                        : "text-white"
                    }`}
                    fill="currentColor"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                      stroke="#ff5e00"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
              <span className="rounded-full w-fit h-fit text-sm pl-1 font-bodyFont mt-0.5 text-orange-800 dark:text-orange-100">
                {avgRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip rendered outside of ripple container to avoid DOM conflict */}
      {userRating > 0 && showFeedbackTooltip && FeedbackTooltipDetail}
    </div>
  );
}

export default React.memo(StarRating);
