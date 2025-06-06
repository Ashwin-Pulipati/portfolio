// import React, { useCallback, useState } from "react";
// import { GoHeart, GoHeartFill } from "react-icons/go";
// import { createRipple } from "../../layouts/RippleEffect";
// import { useFeedback } from "./FeedbackContext";
// import { pinkStyles } from "../constants/LinksAndInterests.constants";


// function Likes({ projectId, temporary = false }) {
//   const { getProjectFeedback, toggleLike } = useFeedback();
//   const { likes, isLiked } = getProjectFeedback(projectId);
//   const [showLikes, setShowLikes] = useState(false);

//   const handleLikeClick = useCallback(() => {
//     toggleLike(projectId);
//     if (temporary) {
//       setShowLikes(true);
//       setTimeout(() => setShowLikes(false), 2000);
//     }
//   }, [projectId, toggleLike, temporary]);

//   if (temporary) {
//     return (
//       <div
//         className={`relative p-0.5 rounded-full flex items-center ${pinkStyles.baseBg} ${pinkStyles.baseShadow} ${pinkStyles.gradientHover}`}
//       >
//         {showLikes ? (
//           <div className="relative">
//             <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-600 opacity-60 blur"></div>
//             <div
//               className={`relative w-22 h-12 p-0.5 rounded-full flex justify-start px-4 space-x-4 items-center ${pinkStyles.baseBg}`}
//             >
//               <button
//                 className={`relative z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none ${pinkStyles.baseBg} ${pinkStyles.icon}`}
//                 onClick={handleLikeClick}
//                 aria-label="Like"
//               >
//                 {isLiked ? (
//                   <GoHeartFill
//                     className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
//                   />
//                 ) : (
//                   <GoHeartFill
//                     className={`${pinkStyles.icon} ${pinkStyles.heartInactive}`}
//                   />
//                 )}
//               </button>
//               <span
//                 className={`text-sm pb-0.5 w-fit h-fit px-2 font-medium ${pinkStyles.baseText}`}
//               >
//                 {likes}
//               </span>
//             </div>
//           </div>
//         ) : (
//           <button
//             className={`relative z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none transition duration-200 group/button ripple-container ${pinkStyles.baseBg}`}
//             onClick={handleLikeClick}
//             onMouseDown={createRipple}
//             aria-label="Like"
//           >
//             {isLiked ? (
//               <GoHeartFill
//                 className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
//               />
//             ) : (
//               <span className="group">
//                 <GoHeart
//                   className={`${pinkStyles.icon} ${pinkStyles.baseText} group-hover/button:hidden`}
//                 />
//                 <GoHeartFill
//                   className={`${pinkStyles.icon} ${pinkStyles.heartInactive} hidden group-hover/button:inline`}
//                 />
//               </span>
//             )}
//           </button>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`relative rounded-full overflow-visible ripple-container ${pinkStyles.baseBg} ${pinkStyles.baseShadow}`}
//       onMouseDown={createRipple}
//     >
//       <div
//         className={`relative p-0.5 rounded-full flex items-center cursor-pointer ${pinkStyles.gradientHover}`}
//         onClick={handleLikeClick}
//       >
//         <div
//           className={`group relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none ${pinkStyles.baseBg}`}
//         >
//           <button
//             className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center focus:outline-none transition duration-200"
//             aria-label="Like"
//           >
//             {!isLiked ? (
//               <>
//                 <GoHeart
//                   className={`${pinkStyles.icon} ${pinkStyles.heartActive} ${pinkStyles.baseText} group-hover:hidden`}
//                 />
//                 <GoHeartFill
//                   className={`${pinkStyles.icon} ${pinkStyles.heartInactive} hidden group-hover:inline`}
//                 />
//               </>
//             ) : (
//               <GoHeartFill
//                 className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
//               />
//             )}
//           </button>
//           <span
//             className={`text-sm pb-0.5 w-fit h-fit px-2 pr-4 ${pinkStyles.baseText}`}
//           >
//             {likes}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default React.memo(Likes);



import React, { useCallback, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { createRipple } from "../../layouts/RippleEffect";
import { useFeedback } from "./FeedbackContext";
import { pinkStyles } from "../constants/LinksAndInterests.constants";

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
            <div
              className={`relative w-22 h-12 p-0.5 rounded-full flex justify-start px-4 space-x-4 items-center ${pinkStyles.baseBg}`}
            >
              <button
                className={`relative z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none ${pinkStyles.baseBg}`}
                onClick={handleLikeClick}
                aria-label="Like"
              >
                {isLiked ? (
                  <GoHeartFill
                    className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
                  />
                ) : (
                  <GoHeartFill
                    className={`${pinkStyles.icon} ${pinkStyles.heartInactive}`}
                  />
                )}
              </button>
              <span
                className={`text-sm pb-0.5 w-fit h-fit px-2 font-medium ${pinkStyles.baseText}`}
              >
                {likes}
              </span>
            </div>
          </div>
        ) : (
          <button
            className={`relative z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none transition duration-200 group/button ripple-container ${pinkStyles.baseBg}`}
            onClick={handleLikeClick}
            onMouseDown={createRipple}
            aria-label="Like"
          >
            {isLiked ? (
              <GoHeartFill
                className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
              />
            ) : (
              <span className="group">
                <GoHeart
                  className={`${pinkStyles.icon} ${pinkStyles.baseText} group-hover/button:hidden`}
                />
                <GoHeartFill
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
        <div
          className={`group relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none ${pinkStyles.baseBg}`}
        >
          <button
            className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center focus:outline-none transition duration-200"
            aria-label="Like"
          >
            {!isLiked ? (
              <>
                <GoHeart
                  className={`${pinkStyles.icon} ${pinkStyles.heartActive} ${pinkStyles.baseText} group-hover:hidden`}
                />
                <GoHeartFill
                  className={`${pinkStyles.icon} ${pinkStyles.heartInactive} hidden group-hover:inline`}
                />
              </>
            ) : (
              <GoHeartFill
                className={`${pinkStyles.icon} ${pinkStyles.heartActive}`}
              />
            )}
          </button>
          <span
            className={`text-sm pb-0.5 w-fit h-fit px-2 pr-4 ${pinkStyles.baseText}`}
          >
            {likes}
          </span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Likes);
