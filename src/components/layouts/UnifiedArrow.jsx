import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { createRipple } from "./RippleEffect";

const UnifiedArrow = React.memo(
  ({ variant = "features", direction = "next", onClick, disabled = false }) => {
    const Icon = direction === "next" ? HiArrowRight : HiArrowLeft;

    if (variant === "pagination") {
      return (
        <button
          className={`relative w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center transition z-10 ${
            disabled
              ? "opacity-50 cursor-not-allowed boxBgGradient elevatedShadow rounded-md"
              : "gradientBorderMd"
          }`}
          onClick={!disabled ? onClick : null}
          aria-label="pagination"
        >
          <div
            className="relative z-10 w-full h-full flex justify-center items-center rounded-md boxBgGradient 
      cardGradient transition-colors duration-100 ripple-container overflow-hidden"
            {...(!disabled && { onMouseDown: createRipple })}
          >
            <Icon className="arrowIcon xs:text-xl sm:text-2xl" />
          </div>
        </button>
      );
    } else if (variant === "projectDetail") {
      return (
        <button
          className={`w-10 h-10 md:w-12 md:h-12 rounded-lg text-2xl text-white flex justify-center items-center absolute top-1/2 ${
            direction === "next" ? "-right-4 md:-right-8" : "-left-4 md:-left-8"
          } transform -translate-y-1/2 cursor-pointer z-10`}
          onClick={onClick}
          aria-label="Project Detail arrow"
        >
          <div
            className="relative w-10 h-10 md:w-12 md:h-12 flex justify-center items-center gradientBorderLg boxBgGradient 
            cardGradient group transition-colors duration-100"
          >
            <div className="relative flex justify-center items-center group p-0.5 rounded-md hoverFocusGradient">
              <div className="w-10 h-10 md:w-12 md:h-12 cardGradient flex justify-center items-center rounded-md">
                <Icon className="arrowIcon text-xl md:text-2xl" />
              </div>
            </div>
          </div>
        </button>
      );
    } else {
      return (
        <button
          className={`w-16 h-16 rounded-md text-2xl flex justify-center items-center absolute top-1/2 ${
            direction === "next" ? "right-6" : "left-6"
          } transform -translate-y-1/2 cursor-pointer z-10
        `}
          onClick={onClick}
          aria-label="Features arrow"
        >
          <div
            className="relative flex justify-center items-center group gradientBorderMd"
          >
            <div
              className="w-16 h-16 flex justify-center items-center rounded-md cardGradient ripple-container"
              onMouseDown={createRipple}
            >
              <Icon className="arrowIcon" />
            </div>
          </div>
        </button>
      );
    }
  }
);

export default React.memo(UnifiedArrow);
