import React, { useState, useEffect, useRef } from "react";
import AnimatedFairyLightMode from "../../assets/images/Webp/fairy-trial.webp";
import AnimatedFairyDarkMode from "../../assets/images/Webp/fairy-trial2.webp";
import "./FairyAnimation.css";

const FairyAnimation = ({
  section, // a string identifier (e.g. "contact", "banner", etc.)
  messages = ["Default message"],
  displayTime = 5000, // how long the fairy is visible (ms)
  minInterval = 20000, // minimum time between appearances (ms)
  maxInterval = 60000, // maximum time between appearances (ms)
  shockTitle = "Did you know?", // fallback shock title if not provided by message object
}) => {
  const [showFairy, setShowFairy] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");
  const [displayShockTitle, setDisplayShockTitle] = useState(shockTitle);
  const [isDark, setIsDark] = useState(false);
  const [pauseAnim, setPauseAnim] = useState(false);
  const [isHolding, setIsHolding] = useState(false); // Track hold state

  // Global flag ensures only one fairy appears at a time.
  if (typeof window.__fairyActive === "undefined") {
    window.__fairyActive = false;
  }
  // Global mapping for message indices per section.
  if (typeof window.__fairyMessageIndices === "undefined") {
    window.__fairyMessageIndices = {};
  }

  // Dark mode detection
  useEffect(() => {
    const updateDarkMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Utility to get a random integer between min (inclusive) and max (exclusive)
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  useEffect(() => {
    let timer;

    const scheduleNext = () => {
      const delay = randomInt(minInterval, maxInterval);
      timer = setTimeout(() => {
        if (!window.__fairyActive) {
          window.__fairyActive = true;

          // Determine which message to show for this section
          let idx = window.__fairyMessageIndices[section] || 0;
          const selected = messages[idx];
          // Check if message is an object (with message and shockTitle) or just a string.
          if (typeof selected === "object" && selected !== null) {
            setDisplayMessage(selected.message);
            setDisplayShockTitle(selected.shockTitle || shockTitle);
          } else {
            setDisplayMessage(selected);
            setDisplayShockTitle(shockTitle);
          }
          // Update global mapping so next time the next message shows
          window.__fairyMessageIndices[section] = (idx + 1) % messages.length;

          setShowFairy(true);
          // Hide after displayTime, unless the user is holding the speech bubble
          const hideFairy = () => {
            if (!isHolding) {
              setShowFairy(false);
              window.__fairyActive = false;
              scheduleNext();
            } else {
              // Keep checking until the user releases the hold
              setTimeout(hideFairy, 500);
            }
          };
          setTimeout(hideFairy, displayTime);
        } else {
          // If another fairy is active, try again shortly.
          scheduleNext();
        }
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(timer);
  }, [
    messages,
    displayTime,
    minInterval,
    maxInterval,
    section,
    shockTitle,
    isHolding,
  ]);

  const longPressDelay = 1000; // how long to hold before pausing
  const longPressTimer = useRef(null);
  const handlePressStart = () => {
    longPressTimer.current = setTimeout(() => {
      setPauseAnim(true);
      setIsHolding(true);
    }, longPressDelay);
  };

  const handlePressEnd = () => {
    clearTimeout(longPressTimer.current);
    setPauseAnim(false);
    setIsHolding(false);
  };


  return (
    <div
      className={`relative inline-block transition-opacity duration-500 ${
        showFairy ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Close Icon (remains outside the clickable area) */}
      <div
        className="absolute -top-10 left-0 z-10 cursor-pointer hover:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
          rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne"
        onClick={() => {
          setShowFairy(false);
          window.__fairyActive = false;
        }}
      >
        <div className="relative w-5 h-5 flex items-center justify-center bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-300 rounded-full p-1">
          <span className="relative block w-3.5 h-3.5 text-blue-700 dark:text-designColor">
            <span className="absolute inset-0 top-1.5 right-1 bg-current rotate-45 w-full h-[2px] rounded-full"></span>
            <span className="absolute inset-0 top-1.5 right-1 bg-current -rotate-45 w-full h-[2px] rounded-full"></span>
          </span>
        </div>
      </div>

      {/* Fairy clickable area */}
      <div
        className="fairy-hover-area"
        onMouseDown={handlePressStart}
        onTouchStart={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchEnd={handlePressEnd}
      >
        {/* Fairy Image */}
        <img
          src={isDark ? AnimatedFairyDarkMode : AnimatedFairyLightMode}
          alt="fairy"
          width={110}
          height={110}
          className="block -mt-9"
          loading="lazy"
        />

        {/* Speech Bubble */}
        <div
          className="absolute -top-12 -right-36 z-10 animate-fadeInBounce"
          style={{ animationPlayState: pauseAnim ? "paused" : "running" }}
        >
          <div className="relative speech-bubble text-xs text-center ">
            <div className="font-bold text-titleFont text-gray-800">
              {displayShockTitle}
            </div>
            <p className="text-bodyFont text-gray-600">{displayMessage}</p>
            <div className="speech-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairyAnimation;
