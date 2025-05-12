import React from 'react'
import { createRipple } from '../../layouts/RippleEffect';

function CrossIcon() {
  return (
    <>
      <div
        className="shadow-shadowTwo dark:shadow-shadowOne absolute -inset-0.5 p-0.5 rounded-full 
      bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-0 group-hover:opacity-100
      group-focus:opacity-100 transition-opacity duration-300"
      ></div>
      <div
        onMouseDown={createRipple}
        className="relative w-full h-full bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] 
        to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-300 
        rounded-full flex items-center justify-center ripple-container"
      >
        <span className="relative block w-5 h-5 text-blue-700 dark:text-designColor">
          <span className="absolute inset-0 top-2 right-1 bg-current rotate-45 w-full h-[4px] rounded-full" />
          <span className="absolute inset-0 top-2 right-1 bg-current -rotate-45 w-full h-[4px] rounded-full" />
        </span>
      </div>
    </>
  );
}

export default React.memo(CrossIcon);