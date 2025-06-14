// import React from "react";
// import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
// import { FiExternalLink } from "react-icons/fi";
// import { createRipple } from "../../layouts/RippleEffect";
// import { redStyles } from "../constants/LinksAndInterests.constants";
// function Demo({ demo }) {
//   return (
//     <div
//       className={`relative rounded-full overflow-visible ripple-container ${redStyles.baseBg} ${redStyles.baseShadow} hover:shadow-none`}
//       onMouseDown={createRipple}
//     >
//       <button
//         className="relative flex items-center gradientBorderFull cursor-pointer"
//         onClick={() => window.open(demo, "_blank", "noopener,noreferrer")}
//       aria-label="Demo"
//       >
//         <div
//           className={`group relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none ${redStyles.baseBg}`}
//         >
//           <a
//             href={demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={(e) => e.stopPropagation()}
//             className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center focus:outline-none transition duration-200"
//             aria-label="Demo"
//           >
//             <BsPlayCircle
//               className={`${redStyles.icon} ${redStyles.baseText} opacity-80 transition duration-200 group-hover:hidden`}
//             />
//             <BsPlayCircleFill
//               className={`${redStyles.icon} ${redStyles.baseText} transition duration-200 hidden group-hover:inline`}
//             />
//           </a>
//           <div className="relative flex items-center text-sm w-fit pr-4">
//             <span className={`font-bodyFont mt-0.5 ${redStyles.baseText}`}>
//               Demo
//             </span>
//             <a
//               href={demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-[width,margin] duration-200"
//             >
//               <FiExternalLink className="w-4 h-4 text-yellow-800 dark:text-yellow-200" />
//             </a>
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }

// export default React.memo(Demo);



import React from "react";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { createRipple } from "../../layouts/RippleEffect";
import { redStyles } from "../constants/LinksAndInterests.constants";

function Demo({ demo }) {
  return (
    <button
      type="button"
      className={`relative rounded-full overflow-visible ripple-container ${redStyles.baseBg} ${redStyles.baseShadow} hover:shadow-none flex items-center cursor-pointer ${redStyles.border}`}
      onClick={() => window.open(demo, "_blank", "noopener,noreferrer")}
      onMouseDown={createRipple}
      aria-label="Demo"
    >
      <div
        className={`group relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none ${redStyles.baseBg}`}
      >
        <div
          className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center pointer-events-none transition duration-200"
          aria-hidden="true"
        >
          <BsPlayCircle
            className={`${redStyles.icon} ${redStyles.baseText} opacity-80 transition duration-200 group-hover:hidden`}
          />
          <BsPlayCircleFill
            className={`${redStyles.icon} ${redStyles.baseText} transition duration-200 hidden group-hover:inline`}
          />
        </div>

        <div className="relative flex items-center text-sm w-fit pr-4">
          <span className={`font-bodyFont mt-0.5 ${redStyles.baseText}`}>
            Demo
          </span>
          <FiExternalLink
            className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-[width,margin] duration-200 text-yellow-800 dark:text-yellow-200"
            aria-hidden="true"
          />
        </div>
      </div>
    </button>
  );
}

export default React.memo(Demo);
