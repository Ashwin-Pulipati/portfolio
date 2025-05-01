// // ThemeToggle.jsx
// import React from "react";
// import { RiSunLine, RiMoonLine } from "react-icons/ri";
// import { createRipple } from "../../layouts/RippleEffect";

// function ThemeToggle({ theme, toggleTheme }) {
//   return (
//     <div
//       onClick={toggleTheme}
//       onMouseDown={ createRipple}
//       className="px-3 py-3 rounded-full
//                  text-gray-800 dark:text-white flex items-center justify-center bg-boxBgWhite dark:bg-boxBg
//                  bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022]
//                  relative group cursor-pointer transition-colors duration-300 ripple-container"
//     >
//       {theme === "light" ? (
//         <>
//           <RiSunLine size={24} className="text-orange-600" />
//           <div
//             className="z-10 opacity-0 group-hover:opacity-100 mt-9 absolute top-1/2 left-1/2
//                        transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2
//                        bg-orange-100 border border-orange-800 border-r-0 border-b-0"
//           ></div>
//           <span
//             className="absolute bottom-full -mb-[5.4rem] left-1/2 transform -translate-x-1/2
//                        px-2 py-1 text-xs text-orange-800 bg-orange-100 border border-orange-800
//                        rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
//           >
//             Light Mode
//           </span>
//         </>
//       ) : (
//         <>
//           <RiMoonLine size={24} />
//           <div
//             className="z-10 opacity-0 group-hover:opacity-100 mt-9 absolute top-1/2 left-1/2
//                        transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2
//                        bg-gray-800 border border-white border-r-0 border-b-0"
//           ></div>
//           <span
//             className="absolute bottom-full -mb-[5.4rem] left-1/2 transform -translate-x-1/2
//                        px-2 py-1 text-xs text-white bg-gray-800 border border-white rounded-md
//                        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
//           >
//             Dark Mode
//           </span>
//         </>
//       )}
//     </div>
//   );
// }

// export default React.memo(ThemeToggle);

// ThemeToggle.jsx
import React from "react";
import { RiSunLine, RiMoonLine, RiComputerLine } from "react-icons/ri";
import { createRipple } from "../../layouts/RippleEffect";

function ThemeToggle({ theme, toggleTheme }) {
  // choose which icon and tooltip to show
  let icon, label, backgroundAndBorder;
  if (theme === "light") {
    icon = <RiSunLine size={24} className="text-orange-600" />;
    label = "Light Mode";
    backgroundAndBorder = "text-orange-800 bg-orange-100 border-orange-800";
  } else if (theme === "dark") {
    icon = <RiMoonLine size={24} />;
    label = "Dark Mode";
    backgroundAndBorder = "text-white bg-gray-800 border-white";
  } else {
    icon = <RiComputerLine size={24} className="text-stone-600 dark:text-stone-100" />;
    label = "System Mode";
    backgroundAndBorder = "text-stone-800 bg-stone-100 border-stone-800";
  }
  
  return (
    /* outer wrapper: overflows visible so tooltip can escape */
    <div className="relative group inline-block overflow-visible">
      {/* inner button: handles ripple and stays clipped */}
      <div
        onClick={toggleTheme}
        onMouseDown={createRipple}
        className="ripple-container
        px-3 py-3 rounded-full text-gray-800 dark:text-white
        flex items-center justify-center bg-boxBgWhite dark:bg-boxBg
        bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7]
        to-white dark:from-[#262a2e] dark:to-[#1f2022]
        cursor-pointer transition-colors duration-300 overflow-hidden"
      >
        {icon}
      </div>
      {/* tooltip arrow */}
      <div
        className={`z-20 opacity-0 group-hover:opacity-100 mt-9 absolute top-1/2
        left-1/2 transform -translate-x-1/2 -translate-y-1/2
        rotate-45 w-2 h-2 border ${backgroundAndBorder}
        border-r-0 border-b-0 pointer-events-none`}
      />
      {/* tooltip text */}
      <span
        className={`absolute bottom-full -mb-[5.35rem] left-1/2 transform -translate-x-1/2
        px-2 py-1 text-xs border ${backgroundAndBorder}
        rounded-md opacity-0 group-hover:opacity-100 transition-opacity
        pointer-events-none whitespace-nowrap z-10`}
      >
        {label}
      </span>
    </div>
  );
}

export default React.memo(ThemeToggle);
