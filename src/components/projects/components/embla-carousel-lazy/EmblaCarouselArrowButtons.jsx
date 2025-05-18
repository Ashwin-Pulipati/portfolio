import React, { useCallback, useEffect, useState } from "react";

export const PrevButton = React.memo(({ emblaApi }) => {
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;
    setDisabled(!emblaApi.canScrollPrev());
    const update = () => setDisabled(!emblaApi.canScrollPrev());
    emblaApi.on("select", update).on("reInit", update);
    return () => emblaApi.off("select", update).off("reInit", update);
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <button
      onClick={scrollPrev}
      disabled={disabled}
      className={`
        relative p-0.5 rounded-full
        cardGradient hoverFocusGradient
        disabled:opacity-50
        pointer-events-auto
        focus:outline-none
      `}
    >
      <span
        className="
          w-8 h-8 md:w-[3.2rem] md:h-[3.2rem]
          bg-bodyColorWhite dark:bg-bodyColor
          rounded-full flex items-center justify-center arrowIcon
        "
      >
        <svg
          className="w-3 h-3 md:w-1/3 md:h-1/3 text-current"
          viewBox="0 0 532 532"
        >
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      </span>
    </button>
  );
});

export const NextButton = React.memo(({ emblaApi }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setDisabled(!emblaApi.canScrollNext());
    update();
    emblaApi.on("select", update).on("reInit", update);
    return () => emblaApi.off("select", update).off("reInit", update);
  }, [emblaApi]);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <button
      onClick={scrollNext}
      disabled={disabled}
      className="
        relative p-0.5 rounded-full
        cardGradient hoverFocusGradient
        disabled:opacity-50
        pointer-events-auto
        focus:outline-none
      "
    >
      <span
        className="
          w-8 h-8 md:w-[3.2rem] md:h-[3.2rem]
          bg-bodyColorWhite dark:bg-bodyColor
          rounded-full flex items-center justify-center arrowIcon
        "
      >
        <svg
          className="w-3 h-3 md:w-1/3 md:h-1/3 text-current"
          viewBox="0 0 532 532"
        >
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      </span>
    </button>
  );
});





