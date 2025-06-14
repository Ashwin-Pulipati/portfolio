import React, { useCallback, useState } from "react";
import { createRipple } from "../../layouts/RippleEffect";
import { useFeedback } from "./FeedbackContext";
import { pinkStyles } from "../constants/LinksAndInterests.constants";
import { PiHeart, PiHeartFill } from "react-icons/pi";

function Likes({ projectId, temporary = false }) {
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
        className={`relative p-0.5 rounded-full flex items-center ${pinkStyles.baseBg} ${pinkStyles.baseShadow} ${pinkStyles.gradientHover}`}
      >
        {showLikes ? (
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-600 opacity-60 blur"></div>
            <button
              className={`relative w-22 h-12 p-0.5 rounded-full flex justify-start pr-2.5 items-center focus:outline-none ${pinkStyles.baseBg}`}
              onClick={handleLikeClick}
              aria-label="Like"
            >
              <span
                className={`relative z-10 w-12 h-12 rounded-full flex justify-center items-center ${pinkStyles.baseBg}`}
              >
                <PiHeartFill
                  className={`${pinkStyles.icon} ${
                    isLiked ? pinkStyles.heartActive : pinkStyles.heartInactive
                  }`}
                />
              </span>
              <span
                className={`text-sm leading-0 w-fit h-fit px-2 font-medium ${pinkStyles.baseText}`}
              >
                {likes}
              </span>
            </button>
          </div>
        ) : (
          <button
            className={`relative z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none transition duration-200 group/button ripple-container ${pinkStyles.baseBg}`}
            onClick={handleLikeClick}
            onMouseDown={createRipple}
            aria-label="Like"
          >
            {isLiked ? (
              <PiHeartFill
                className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
              />
            ) : (
              <span className="group">
                <PiHeart
                  className={`${pinkStyles.icon} ${pinkStyles.baseText} group-hover/button:hidden mt-0.5`}
                />
                <PiHeartFill
                  className={`${pinkStyles.icon} ${pinkStyles.heartInactive} hidden group-hover/button:inline`}
                />
              </span>
            )}
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-visible ripple-container ${pinkStyles.baseBg} ${pinkStyles.baseShadow}`}
      onMouseDown={createRipple}
    >
      <div
        className={`relative p-0.5 rounded-full flex items-center cursor-pointer ${pinkStyles.gradientHover}`}
        onClick={handleLikeClick}
      >
        <button
          onClick={handleLikeClick}
          aria-label="Like"
          className={`group relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none focus:outline-none ${pinkStyles.baseBg}`}
        >
          <span className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center transition duration-200">
            {!isLiked ? (
              <>
                <PiHeart
                  className={`${pinkStyles.icon} ${pinkStyles.heartActive} ${pinkStyles.baseText} group-hover:hidden mt-0.5`}
                />
                <PiHeartFill
                  className={`${pinkStyles.icon} ${pinkStyles.heartInactive} hidden group-hover:inline`}
                />
              </>
            ) : (
              <PiHeartFill
                className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
              />
            )}
          </span>
          <span
            className={`text-sm leading-0 w-fit h-fit px-2 pr-4 ${pinkStyles.baseText}`}
          >
            {likes}
          </span>
        </button>
      </div>
    </div>
  );
}

export default React.memo(Likes);
