// import React from 'react'
// import { createRipple } from '../../layouts/RippleEffect';

// function HamburgerMenu ({showMenu}) {
//     return (
//       <div className="w-[3.5rem] h-[3.5rem] gradientBorderFull transition-transform duration-300">
//         <button
//           onMouseDown={createRipple}
//           className="relative w-full h-full flex items-center justify-center cardGradient transition-colors duration-300 rounded-full ripple-container"
//         aria-label='Hamburger menu'
//         >
//           <span className="relative block w-6 h-4 arrowIcon">
//             <span className="absolute top-0 left-0 w-full h-[3px] bg-current rounded-full" />
//             <span className="absolute top-1/2 left-0 w-full h-[3px] bg-current rounded-full transform -translate-y-1/2" />
//             <span className="absolute bottom-0 left-0 w-full h-[3px] bg-current rounded-full" />
//           </span>
//         </button>
//       </div>
//     );
// }

// export default React.memo(HamburgerMenu)


import React from "react";
import { createRipple } from "../../layouts/RippleEffect";

function HamburgerMenu({ showMenu }) {
  return (
    <div className="w-[3.5rem] h-[3.5rem] gradientBorderFull transition-transform duration-300">
      <button
        onMouseDown={createRipple}
        className="relative w-full h-full flex items-center justify-center cardGradient transition-colors duration-300 rounded-full ripple-container"
        aria-label="Hamburger menu"
      >
        <span className="relative block w-6 h-4 arrowIcon">
          {" "}
          {/* Fixed span tag */}
          <span
            className={`absolute left-0 w-full h-[3px] bg-current rounded-full transition-all duration-300 ${
              showMenu ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 w-full h-[3px] bg-current rounded-full transform -translate-y-1/2 transition-all duration-300 ${
              showMenu ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 w-full h-[3px] bg-current rounded-full transition-all duration-300 ${
              showMenu ? "bottom-1/2 -rotate-45 translate-y-1/2" : "bottom-0"
            }`}
          />
        </span>
      </button>
    </div>
  );
}

export default React.memo(HamburgerMenu);