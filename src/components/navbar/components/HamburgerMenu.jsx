import React from 'react'
import { createRipple } from '../../layouts/RippleEffect';

function HamburgerMenu ({showMenu}) {
    return (
      <>
        <div
          className={`shadow-shadowTwo dark:shadow-shadowOne absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] transition-opacity duration-300 ${
            !showMenu
              ? "opacity-0 group-hover:opacity-100 group-focus:opacity-100"
              : "opacity-0"
          }`}
        ></div>
        <div
          onMouseDown={createRipple}
          className="relative w-full h-full bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022]
                 transition-colors duration-300 rounded-full flex items-center justify-center ripple-container"
        >
          <span className="relative block w-6 h-4 text-blue-700 dark:text-designColor">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-current rounded-full"></span>
            <span className="absolute top-1/2 left-0 w-full h-[3px] bg-current rounded-full transform -translate-y-1/2"></span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-current rounded-full"></span>
          </span>
        </div>
      </>
    );
}

export default React.memo(HamburgerMenu)