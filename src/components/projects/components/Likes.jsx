import React, { useState, useCallback } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useFeedback } from "./FeedbackContext"; // adjust the import path as needed
import { createRipple } from "../../layouts/RippleEffect";

function Likes({ projectId, temporary = false}) {
  const { getProjectFeedback, toggleLike } = useFeedback();
  const { likes, isLiked } = getProjectFeedback(projectId);
  const [showLikes, setShowLikes] = useState(false);

  const handleLikeClick = useCallback(() => {
    toggleLike(projectId);
    if (temporary) {
      setShowLikes(true);
      setTimeout(() => setShowLikes(false), 2000);
    }
  }, [projectId, toggleLike, temporary]);

  if (temporary) {
    return (
      <div
        className="shadow-md shadow-pink-400 dark:shadow-pink-500 hover:shadow-none relative p-0.5 rounded-full flex items-center 
        bg-pink-100 dark:bg-pink-800 hover:bg-gradient-to-r 
      focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]"
      >
        {showLikes ? (
          // Expanded view: Like button with like count.
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-60 blur"></div>
            <div className="relative w-22 h-12 p-0.5 rounded-full bg-pink-100 dark:bg-pink-800 flex justify-start items-center">
              <button
                className="relative z-10 w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-800 flex justify-center items-center focus:outline-none transition duration-200"
                onClick={handleLikeClick}
              >
                {isLiked ? (
                  <GoHeartFill className="w-5 h-5 text-[#ff4586] dark:text-pink-200 transition duration-200 mt-0.5" />
                ) : (
                  <GoHeartFill className="w-5 h-5 text-pink-300 dark:text-pink-100 opacity-80 transition duration-200" />
                )}
              </button>
              <span className="text-sm pb-0.5 w-fit h-fit px-2 pr-4 font-medium text-pink-800 dark:text-pink-100">
                {likes}
              </span>
            </div>
          </div>
        ) : (
          // Compact view: Only the like button.
          <button
              className="relative z-10 w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-800 flex justify-center items-center 
            focus:outline-none transition duration-200 group/button ripple-container"
              onClick={handleLikeClick}
              onMouseDown={createRipple}
          >
            {isLiked ? (
              <GoHeartFill className="w-5 h-5 text-[#ff4586] dark:text-pink-200 transition duration-200 mt-0.5" />
            ) : (
              <span className="group">
                <GoHeart className="w-5 h-5 text-pink-800 dark:text-pink-100 group-hover/button:hidden transition duration-200 mt-0.5" />
                <GoHeartFill className="w-5 h-5 hidden group-hover/button:inline text-pink-300 dark:text-pink-100 transition duration-200" />
              </span>
            )}
          </button>
        )}
      </div>
    );
  }

  // Always-visible mode.
  return (
    <div
      // OUTER WRAPPER with the full pink shadow
      className="relative rounded-full bg-pink-100 dark:bg-pink-800 shadow-md shadow-pink-400 dark:shadow-pink-500 ripple-container
      overflow-visible hover:shadow-none"
      onMouseDown={createRipple}
    >
      <div
        // INNER gradient container
        className="relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r 
        from-[#58eba6] via-[#1fc8de] to-[#0584d9] cursor-pointer"
        onClick={handleLikeClick}
      >
        <div className="group relative w-22 h-11 p-0.5 rounded-full bg-pink-100 dark:bg-pink-800 flex justify-start 
        items-center hover:shadow-none">
          <button className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center focus:outline-none 
          transition duration-200">
            {!isLiked ? (
              <>
                <GoHeart className="w-5 h-5 text-[#ff4586] dark:text-pink-200 opacity-80 transition duration-200 mt-0.5 group-hover:hidden" />
                <GoHeartFill className="w-5 h-5 hidden group-hover:inline text-pink-300 dark:text-pink-100 transition duration-200 mt-0.5" />
              </>
            ) : (
              <GoHeartFill className="w-5 h-5 text-[#ff4586] dark:text-pink-200 transition duration-200 mt-0.5" />
            )}
          </button>
          <span className="text-sm pb-0.5 w-fit h-fit px-2 pr-4 text-pink-800 dark:text-pink-100">
            {likes}
          </span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Likes);
