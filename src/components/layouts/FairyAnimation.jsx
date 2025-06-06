// import React, { useEffect, useRef, useState } from "react";
// import AnimatedFairyLightMode from "../../assets/images/Webp/fairy-trial.webp";
// import AnimatedFairyDarkMode from "../../assets/images/Webp/fairy-trial2.webp";
// import "./FairyAnimation.css";

// const FairyAnimation = ({
//   section,
//   messages = ["Default message"],
//   displayTime = 10000,
//   minInterval = 20000,
//   maxInterval = 60000,
//   shockTitle = "Did you know?",
// }) => {
//   const [showFairy, setShowFairy] = useState(false);
//   const [displayMessage, setDisplayMessage] = useState("");
//   const [displayShockTitle, setDisplayShockTitle] = useState(shockTitle);
//   const [isDark, setIsDark] = useState(
//     !!document.documentElement.classList.contains("dark")
//   );
//   const [pauseAnim, setPauseAnim] = useState(false);
//   const [isHolding, setIsHolding] = useState(false);

//   useEffect(() => {
//     const scheduleNext = () => {
//       const delay = Math.random() * (maxInterval - minInterval) + minInterval;
//       const timer = setTimeout(() => {
//         if (!window.__fairyActive) {
//           window.__fairyActive = true;
//           const idx = window.__fairyMessageIndices?.[section] ?? 0;
//           const selected = messages[idx % messages.length];
//           if (selected?.message) {
//             setDisplayMessage(selected.message);
//             setDisplayShockTitle(selected.shockTitle || shockTitle);
//           } else {
//             setDisplayMessage(selected);
//             setDisplayShockTitle(shockTitle);
//           }
//           window.__fairyMessageIndices = {
//             ...window.__fairyMessageIndices,
//             [section]: (idx + 1) % messages.length,
//           };
//           setShowFairy(true);
//           const hideFairy = () => {
//             if (!isHolding) {
//               setShowFairy(false);
//               window.__fairyActive = false;
//               scheduleNext();
//             } else {
//               setTimeout(hideFairy, 500);
//             }
//           };
//           setTimeout(hideFairy, displayTime);
//         } else {
//           scheduleNext();
//         }
//       }, delay);
//       return () => clearTimeout(timer);
//     };
//     scheduleNext();
//   }, [
//     messages,
//     displayTime,
//     minInterval,
//     maxInterval,
//     section,
//     shockTitle,
//     isHolding,
//   ]);

//   const longPressDelay = 1000;
//   const longPressTimer = useRef(null);
//   const handlePressStart = () => {
//     longPressTimer.current = setTimeout(() => {
//       setPauseAnim(true);
//       setIsHolding(true);
//     }, longPressDelay);
//   };

//   const handlePressEnd = () => {
//     clearTimeout(longPressTimer.current);
//     setPauseAnim(false);
//     setIsHolding(false);
//   };

//   useEffect(() => {
//     const updateDarkMode = () =>
//       setIsDark(document.documentElement.classList.contains("dark"));
//     updateDarkMode();
//     const observer = new MutationObserver(updateDarkMode);
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       className={`relative inline-block transition-opacity duration-1000 ${
//         showFairy ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <button
//         className="absolute -top-10 left-0 z-10 cursor-pointer gradientBorderFull"
//         onClick={() => {
//           setShowFairy(false);
//           window.__fairyActive = false;
//         }}
//         aria-label="Close fairy"
//       >
//         <div className="relative w-5 h-5 flex items-center justify-center cardGradient transition-colors duration-300 rounded-full p-1">
//           <span className="relative block w-3.5 h-3.5 arrowIcon">
//             <span className="absolute inset-0 top-1.5 right-1 bg-current rotate-45 w-full h-[2px] rounded-full"></span>
//             <span className="absolute inset-0 top-1.5 right-1 bg-current -rotate-45 w-full h-[2px] rounded-full"></span>
//           </span>
//         </div>
//       </button>

//       <div
//         className="fairy-hover-area"
//         onMouseDown={handlePressStart}
//         onTouchStart={handlePressStart}
//         onMouseUp={handlePressEnd}
//         onMouseLeave={handlePressEnd}
//         onTouchEnd={handlePressEnd}
//       >
//         <img
//           src={isDark ? AnimatedFairyDarkMode : AnimatedFairyLightMode}
//           alt="fairy"
//           width={110}
//           height={110}
//           className="block -mt-9"
//           loading="lazy"
//         />

//         <div
//           className="absolute -top-12 -right-36 z-10 animate-fadeInBounce"
//           style={{ animationPlayState: pauseAnim ? "paused" : "running" }}
//         >
//           <div className="relative speech-bubble text-xs text-center ">
//             <div className="font-bold text-titleFont text-gray-800">
//               {displayShockTitle}
//             </div>
//             <p className="text-bodyFont text-gray-600">{displayMessage}</p>
//             <div className="speech-arrow" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(FairyAnimation);



// FairyAnimation.jsx

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import AnimatedFairyLightMode from "../../assets/images/Webp/fairy-trial.webp";
import AnimatedFairyDarkMode from "../../assets/images/Webp/fairy-trial2.webp";
import "./FairyAnimation.css";

const FairyAnimation = ({
  section,
  messages = ["Default message"],
  displayTime = 10000,
  minInterval = 20000,
  maxInterval = 60000,
  shockTitle = "Did you know?",
}) => {
  const [showFairy, setShowFairy] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");
  const [displayShockTitle, setDisplayShockTitle] = useState(shockTitle);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  const [pauseAnim, setPauseAnim] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  // track timeouts so we can clear them if needed
  const timeoutRef = useRef(null);

  // scheduleNext wrapped in useCallback to keep stable reference
  const scheduleNext = useCallback(() => {
    const delay =
      Math.random() * (maxInterval - minInterval) + minInterval;
    timeoutRef.current = setTimeout(() => {
      if (!window.__fairyActive) {
        window.__fairyActive = true;
        const idx =
          window.__fairyMessageIndices?.[section] ?? 0;
        const selected = messages[idx % messages.length];

        if (typeof selected === "object" && selected.message) {
          setDisplayMessage(selected.message);
          setDisplayShockTitle(selected.shockTitle || shockTitle);
        } else {
          setDisplayMessage(selected);
          setDisplayShockTitle(shockTitle);
        }

        window.__fairyMessageIndices = {
          ...window.__fairyMessageIndices,
          [section]: (idx + 1) % messages.length,
        };

        setShowFairy(true);

        const hideFairy = () => {
          if (!isHolding) {
            setShowFairy(false);
            window.__fairyActive = false;
            scheduleNext();
          } else {
            // retry after a short delay if user is holding
            timeoutRef.current = setTimeout(hideFairy, 500);
          }
        };

        timeoutRef.current = setTimeout(hideFairy, displayTime);
      } else {
        scheduleNext();
      }
    }, delay);
  }, [
    displayTime,
    isHolding,
    maxInterval,
    minInterval,
    messages,
    section,
    shockTitle,
  ]);

  useEffect(() => {
    scheduleNext();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [scheduleNext]);

  // Handlers for long-press behavior, memoized
  const longPressDelay = 1000;
  const longPressTimer = useRef(null);

  const handlePressStart = useCallback(() => {
    longPressTimer.current = setTimeout(() => {
      setPauseAnim(true);
      setIsHolding(true);
    }, longPressDelay);
  }, []);

  const handlePressEnd = useCallback(() => {
    clearTimeout(longPressTimer.current);
    setPauseAnim(false);
    setIsHolding(false);
  }, []);

  // Close button handler, memoized
  const handleClose = useCallback(() => {
    setShowFairy(false);
    window.__fairyActive = false;
  }, []);

  // Observe dark mode changes
  useEffect(() => {
    const updateDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  // Memoize the correct fairy image source based on dark mode
  const fairySrc = useMemo(
    () => (isDark ? AnimatedFairyDarkMode : AnimatedFairyLightMode),
    [isDark]
  );

  // Memoize the bubble animation style object
  const bubbleStyle = useMemo(
    () => ({
      animationPlayState: pauseAnim ? "paused" : "running",
    }),
    [pauseAnim]
  );

  return (
    <div
      className={`relative inline-block transition-opacity duration-1000 ${
        showFairy ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="absolute -top-10 left-0 z-10 cursor-pointer gradientBorderFull"
        onClick={handleClose}
        aria-label="Close fairy"
      >
        <div className="relative w-5 h-5 flex items-center justify-center cardGradient transition-colors duration-300 rounded-full p-1">
          <span className="relative block w-3.5 h-3.5 arrowIcon">
            <span className="absolute inset-0 top-1.5 right-1 bg-current rotate-45 w-full h-[2px] rounded-full"></span>
            <span className="absolute inset-0 top-1.5 right-1 bg-current -rotate-45 w-full h-[2px] rounded-full"></span>
          </span>
        </div>
      </button>

      <div
        className="fairy-hover-area"
        onMouseDown={handlePressStart}
        onTouchStart={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchEnd={handlePressEnd}
      >
        <img
          src={fairySrc}
          alt="fairy"
          width={110}
          height={110}
          className="block -mt-9"
          loading="lazy"
        />

        <div
          className="absolute -top-12 -right-36 z-10 animate-fadeInBounce"
          style={bubbleStyle}
        >
          <div className="relative speech-bubble text-xs text-center ">
            <div className="font-bold text-titleFont text-gray-800">
              {displayShockTitle}
            </div>
            <p className="text-bodyFont text-gray-600">
              {displayMessage}
            </p>
            <div className="speech-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FairyAnimation);
