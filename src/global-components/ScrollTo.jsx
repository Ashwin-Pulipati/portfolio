// import React, { useEffect, useRef, useState } from "react";
// import { FaArrowUpLong } from "react-icons/fa6";
// import { createRipple } from "../components/layouts/RippleEffect";

// function ScrollTo() {
//   const [position, setPosition] = useState("top");
//   const lastY = useRef(window.pageYOffset);

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.pageYOffset;
//       const maxY = document.documentElement.scrollHeight - window.innerHeight;

//       if (lastY.current !== y) {
//         lastY.current = y;
//         if (y === 0) {
//           setPosition("top");
//         } else if (y >= maxY) {
//           setPosition("bottom");
//         } else {
//           setPosition("middle");
//         }
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   const arrowDown = position === "top";

//   const handleClick = () => {
//     if (position === "top") {
//       window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       className="fixed bottom-24 sm:bottom-28 md:bottom-5 right-2 sm:right-4
//                 group opacity-25 hover:opacity-100 transition-all duration-300
//                 elevatedShadow rounded-full animate-bounce"
//     >
//       <div
//         className="absolute -inset-0.5 p-0.5 rounded-full
//                    appGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
//       <button
//         onClick={handleClick}
//         aria-label={arrowDown ? "Scroll to bottom" : "Scroll to top"}
//         className="relative w-full h-full p-3.5 rounded-full cardGradient transition-colors duration-300 ripple-container"
//         onMouseDown={createRipple}
//       >
//         <FaArrowUpLong
//           className={`w-6 h-6 transition-transform duration-300 text-sky-600 dark:text-sky-300 ${
//             arrowDown ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//     </div>
//   );
// }

// export default React.memo(ScrollTo);



// ScrollTo.jsx

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { createRipple } from "../components/layouts/RippleEffect";

function ScrollTo() {
  const [position, setPosition] = useState("top");
  const lastY = useRef(window.pageYOffset);

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset;
      const maxY =
        document.documentElement.scrollHeight - window.innerHeight;

      if (lastY.current !== y) {
        lastY.current = y;
        if (y === 0) {
          setPosition("top");
        } else if (y >= maxY) {
          setPosition("bottom");
        } else {
          setPosition("middle");
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const arrowDown = useMemo(() => position === "top", [position]);

  const handleClick = useCallback(() => {
    if (position === "top") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [position]);

  return (
    <div
      className="fixed bottom-24 sm:bottom-28 md:bottom-5 right-2 sm:right-4
                group opacity-25 hover:opacity-100 transition-all duration-300
                elevatedShadow rounded-full animate-bounce"
    >
      <div
        className="absolute -inset-0.5 p-0.5 rounded-full
                   appGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <button
        onClick={handleClick}
        aria-label={arrowDown ? "Scroll to bottom" : "Scroll to top"}
        className="relative w-full h-full p-3.5 rounded-full cardGradient transition-colors duration-300 ripple-container"
        onMouseDown={createRipple}
      >
        <FaArrowUpLong
          className={`w-6 h-6 transition-transform duration-300 text-sky-600 dark:text-sky-300 ${
            arrowDown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}

export default React.memo(ScrollTo);
