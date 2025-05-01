import React from "react";
import { RiSunLine, RiMoonLine, RiComputerLine } from "react-icons/ri";
import { createRipple } from "../../layouts/RippleEffect";

function ThemeToggle({ theme, toggleTheme }) {
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
    <div className="relative group inline-block overflow-visible">
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
      
      <div
        className={`z-20 opacity-0 group-hover:opacity-100 mt-9 absolute top-1/2
        left-1/2 transform -translate-x-1/2 -translate-y-1/2
        rotate-45 w-2 h-2 border ${backgroundAndBorder}
        border-r-0 border-b-0 pointer-events-none`}
      />
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
