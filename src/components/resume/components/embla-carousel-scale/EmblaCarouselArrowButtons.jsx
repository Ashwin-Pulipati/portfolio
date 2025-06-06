// import React, { useCallback, useEffect, useState } from "react";

// export const usePrevNextButtons = (emblaApi) => {
//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onSelect = () => {
//       setPrevBtnDisabled(!emblaApi.canScrollPrev());
//       setNextBtnDisabled(!emblaApi.canScrollNext());
//     };

//     onSelect();
//     emblaApi.on("reInit", onSelect).on("select", onSelect);

//     return () => emblaApi.off("reInit", onSelect).off("select", onSelect);
//   }, [emblaApi]);

//   const onPrevButtonClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const onNextButtonClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   };
// };

// export const PrevButton = React.memo(({ onClick, disabled }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     aria-label="Previous"
//     className={`relative p-0.5 rounded-full hoverFocusGradient elevatedShadow disabled:opacity-50 pointer-events-auto focus:outline-none`}
//   >
//     <span
//       className={`w-[3.2rem] h-[3.2rem] cardGradient rounded-full flex items-center justify-center arrowIcon ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"} transition`}
//     >
//       <svg
//         className="w-5 h-5 md:w-1/2 md:h-1/2 arrowIcon"
//         viewBox="0 0 24 24"
//         fill="none"
//       >
//         <path
//           d="M15 18l-6-6 6-6"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   </button>
// ));

// export const NextButton = React.memo(({ onClick, disabled }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     disabled={disabled}
//     aria-label="Next"
//     className="relative p-0.5 rounded-full hoverFocusGradient elevatedShadow disabled:opacity-50 pointer-events-auto focus:outline-none"
//   >
//     <span
//       className="w-[3.2rem] h-[3.2rem] cardGradient rounded-full flex items-center justify-center arrowIcon transition"
//       style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
//     >
//       <svg
//         className="w-5 h-5 md:w-1/2 md:h-1/2 arrowIcon"
//         viewBox="0 0 24 24"
//         fill="none"
//       >
//         <path
//           d="M9 6l6 6-6 6"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   </button>
// ));



// EmblaCarouselArrowButtons.jsx

import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi]);

  const onPrevButtonClick = useCallback(() => emblaApi?.scrollPrev(), [
    emblaApi,
  ]);
  const onNextButtonClick = useCallback(() => emblaApi?.scrollNext(), [
    emblaApi,
  ]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = React.memo(({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label="Previous"
    className={`relative p-0.5 rounded-full hoverFocusGradient elevatedShadow disabled:opacity-50 pointer-events-auto focus:outline-none`}
  >
    <span
      className={`w-[3.2rem] h-[3.2rem] cardGradient rounded-full flex items-center justify-center arrowIcon ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
      } transition`}
    >
      <svg
        className="w-5 h-5 md:w-1/2 md:h-1/2 arrowIcon"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </button>
));

export const NextButton = React.memo(({ onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label="Next"
    className="relative p-0.5 rounded-full hoverFocusGradient elevatedShadow disabled:opacity-50 pointer-events-auto focus:outline-none"
  >
    <span
      className="w-[3.2rem] h-[3.2rem] cardGradient rounded-full flex items-center justify-center arrowIcon transition"
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <svg
        className="w-5 h-5 md:w-1/2 md:h-1/2 arrowIcon"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </button>
));
