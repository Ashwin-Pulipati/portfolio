import React from "react";
import { createRipple } from "../../layouts/RippleEffect";
import {themeConfig} from "../Navbar.constants";

function ThemeToggle({ theme, toggleTheme }) {

  const { icon, label, styles } = themeConfig[theme] || themeConfig.system;

  return (
    <div className="relative group inline-block overflow-visible">
      <button
        onClick={toggleTheme}
        onMouseDown={createRipple}
        className="ripple-container p-3.5 rounded-full text-gray-800 dark:text-white flex items-center justify-center cardGradient cursor-pointer transition-colors duration-300 overflow-hidden"
      aria-label="Theme Toggle"
      >
        {icon}
      </button>
      <div
        className={`z-20 opacity-0 group-hover:opacity-100 mt-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border ${styles} border-r-0 border-b-0 pointer-events-none`}
      />
      <span
        className={`absolute bottom-full -mb-[5.75rem] left-1/2 lg:left-[53%] transform -translate-x-1/2 px-2 py-1 text-xs border ${styles} rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10`}
      >
        {label}
      </span>
    </div>
  );
}

export default React.memo(ThemeToggle);
