import React from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { createRipple } from "./RippleEffect";

const UnifiedArrow = React.memo(
  ({ variant = "features", direction = "next", onClick, disabled = false }) => {
    const Icon = direction === "next" ? HiArrowRight : HiArrowLeft;

    if (variant === "pagination") {
      return (
        <div
          className={`group relative w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center cursor-pointer transition z-10 ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={!disabled ? onClick : null}
        >
          <div
            className={`absolute -inset-1 rounded-lg bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-40 blur transition-opacity duration-500 ${
              !disabled ? "group-hover:opacity-100" : ""
            }`}
          ></div>
          <div
            className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-lg bg-boxBgWhite 
        dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e]
        dark:to-[#1f2022] transition-colors duration-100 ripple-container overflow-hidden"
            {...(!disabled && { onMouseDown: createRipple })}
          >
            <Icon className="text-blue-700 dark:text-designColor xs:text-xl sm:text-2xl" />
          </div>
        </div>
      );
    } else if (variant === "projectDetail") {
      return (
        <div
          className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-lg text-2xl text-white flex justify-center items-center absolute top-1/2 ${
            direction === "next"
              ? "right-[-15px] md:right-[-30px]"
              : "left-[-15px] md:left-[-30px]"
          } transform -translate-y-1/2 cursor-pointer z-10`}
          onClick={onClick}
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-30 blur transition-opacity duration-500"></div>
          <div
            className="relative w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-lg bg-boxBgWhite 
            dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e]
            dark:to-[#1f2022] group transition-colors duration-100 ripple-container"
            onMouseDown={createRipple}
          >
            <div className="relative p-0.5 rounded-md flex justify-center items-center group hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]">
              <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-bodyColorWhite dark:bg-bodyColor flex justify-center items-center rounded-md">
                <Icon className="text-blue-700 dark:text-designColor text-xl md:text-2xl" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`w-16 h-16 rounded-md text-2xl text-blue-700 dark:text-designColor flex justify-center items-center absolute top-1/2 ${
            direction === "next" ? "right-6" : "left-6"
          } transform -translate-y-1/2 shadow-shadowTwo dark:shadow-shadowOne cursor-pointer z-10 
  bg-gradient-to-br from-[#dee3e7] to-white dark:bg-bodyColor dark:bg-none `}
          onClick={onClick}
        >
          <div
            className="relative p-0.5 rounded-md flex justify-center items-center group 
    hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
    shadow-shadowTwo dark:shadow-shadowOne"
          >
            <div
              className="w-16 h-16 flex justify-center items-center rounded-md bg-gradient-to-br from-[#dee3e7] to-white dark:bg-bodyColor dark:bg-none ripple-container"
              onMouseDown={createRipple}
            >
              <Icon />
            </div>
          </div>
        </div>
      );
    }
  }
);

export default React.memo(UnifiedArrow);
