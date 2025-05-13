import React, { useState, useEffect, useRef } from "react";
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
  const [isDark, setIsDark] = useState(!!document.documentElement.classList.contains("dark"));
  const [pauseAnim, setPauseAnim] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = Math.random() * (maxInterval - minInterval) + minInterval;
      const timer = setTimeout(() => {
        if (!window.__fairyActive) {
          window.__fairyActive = true;
          const idx = window.__fairyMessageIndices?.[section] ?? 0;
          const selected = messages[idx % messages.length];
          if (selected?.message) {
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
              setTimeout(hideFairy, 500);
            }
          };
          setTimeout(hideFairy, displayTime);
        } else {
          scheduleNext();
        }
      }, delay);
      return () => clearTimeout(timer);
    };
    scheduleNext();
  }, [
    messages,
    displayTime,
    minInterval,
    maxInterval,
    section,
    shockTitle,
    isHolding,
  ]);

  const longPressDelay = 1000;
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

  return (
    <div
      className={`relative inline-block transition-opacity duration-1000 ${
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

      <div
        className="fairy-hover-area"
        onMouseDown={handlePressStart}
        onTouchStart={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchEnd={handlePressEnd}
      >
        <img
          src={isDark ? AnimatedFairyDarkMode : AnimatedFairyLightMode}
          alt="fairy"
          width={110}
          height={110}
          className="block -mt-9"
          loading="lazy"
        />

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

export default React.memo(FairyAnimation);
