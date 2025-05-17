// import React, { useCallback, useEffect, useRef, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// import { useDarkMode } from "../../../layouts/DarkMode";

// const TWEEN_FACTOR_BASE = 0.52;
// const numberWithinRange = (number, min, max) =>
//   Math.min(Math.max(number, min), max);

// const EmblaCarousel = ({ options, children }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const tweenFactor = useRef(0);
//   const tweenNodes = useRef([]);
//   const isDarkMode = useDarkMode();

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const setTweenNodes = useCallback((api) => {
//     tweenNodes.current = api
//       .slideNodes()
//       .map((slide) => slide.querySelector(".slide-scaler"));
//   }, []);

//   const setTweenFactor = useCallback((api) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
//   }, []);

//   const tweenScale = useCallback((api, eventName) => {
//     if (!api) return;
//     const engine = api.internalEngine();
//     const progress = api.scrollProgress();
//     const inView = api.slidesInView();
//     const isScroll = eventName === "scroll";

//     api.scrollSnapList().forEach((snap, idx) => {
//       let diff = snap - progress;
//       const regs = engine.slideRegistry[idx];
//       regs.forEach((si) => {
//         if (isScroll && !inView.includes(si)) return;
//         if (engine.options.loop) {
//           engine.slideLooper.loopPoints.forEach((lp) => {
//             const t = lp.target();
//             if (si === lp.index && t !== 0) {
//               diff = t < 0 ? snap - (1 + progress) : snap + (1 - progress);
//             }
//           });
//         }
//         const val = 1 - Math.abs(diff * tweenFactor.current);
//         const scale = numberWithinRange(val, 0.3, 1);
//         tweenNodes.current[si].style.transform = `scale(${scale})`;
//       });
//     });
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     setTweenNodes(emblaApi);
//     setTweenFactor(emblaApi);
//     tweenScale(emblaApi);
//     setIsLoaded(true);

//     emblaApi
//       .on("reInit", () => {
//         setTweenNodes(emblaApi);
//         setTweenFactor(emblaApi);
//         tweenScale(emblaApi);
//       })
//       .on("scroll", () => tweenScale(emblaApi, "scroll"))
//       .on("slideFocus", () => tweenScale(emblaApi));
//   }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

//   return (
//     <div className="hidden md:block md:max-w-6xl mx-auto">
//       <div
//         ref={emblaRef}
//         className={`overflow-hidden transition-opacity duration-200 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="flex gap-4">
//           {React.Children.map(children, (child, idx) => (
//             <div key={idx} className="flex-none w-full md:w-1/2 transform-gpu">
//               <div className="slide-scaler transition-transform duration-150 ease-out will-change-transform">
//                 {child}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Controls: dots absolutely centered, arrows on the right */}
//       <div className="mt-6 relative">
//         {/* Dots – absolutely centered */}
//         <div className="absolute mt-2 md:mt-4 left-1/2 top-0 transform -translate-x-1/2 flex space-x-4">
//           {scrollSnaps.map((_, i) => {
//             const isActive = i === selectedIndex;
//             const bgColor = isDarkMode
//               ? isActive
//                 ? "#35BDFD"
//                 : "#23272b"
//               : isActive
//               ? "#1D4ED8"
//               : "lightGray";

//             return (
//               <DotButton
//                 key={i}
//                 onClick={() => onDotButtonClick(i)}
//                 className={`
//         relative
//         w-[10px] h-[10px]
//         md:w-[13px] md:h-[13px]
//         rounded-full
//       `}
//                 style={{
//                   background: bgColor,
//                   boxShadow:
//                     "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
//                 }}
//               />
//             );
//           })}
//         </div>

//         {/* Arrow buttons – normal flow, aligned right */}
//         <div className="flex justify-center pt-12 md:justify-end space-x-6">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;



import React, { useCallback, useEffect, useRef} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useDarkMode } from "../../../layouts/DarkMode";

const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactorRef = useRef(0);
  const tweenNodesRef = useRef([]);
  const isDarkMode = useDarkMode();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const tweenScale = useCallback((api, eventName) => {
    if (!api) return;
    const engine = api.internalEngine();
    const progress = api.scrollProgress();
    const inView = api.slidesInView();
    const isScroll = eventName === "scroll";
    const tweenFactor = tweenFactorRef.current;

    api.scrollSnapList().forEach((snap, idx) => {
      let diff = snap - progress;
      const regs = engine.slideRegistry[idx];
      if (isScroll && !inView.includes(regs[0])) return;
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((lp) => {
          const t = lp.target();
          if (regs[0] === lp.index && t !== 0) {
            diff = t < 0 ? snap - (1 + progress) : snap + (1 - progress);
          }
        });
      }
      const val = 1 - Math.abs(diff * tweenFactor);
      const scale = numberWithinRange(val, 0.3, 1);
      tweenNodesRef.current[regs[0]].style.transform = `scale(${scale})`;
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    tweenFactorRef.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    tweenNodesRef.current = emblaApi
      .slideNodes()
      .map((slide) => slide.querySelector(".slide-scaler"));
    tweenScale(emblaApi);
    emblaApi
      .on("reInit", () => {
        tweenFactorRef.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
        tweenNodesRef.current = emblaApi
          .slideNodes()
          .map((slide) => slide.querySelector(".slide-scaler"));
        tweenScale(emblaApi);
      })
      .on("scroll", () => tweenScale(emblaApi, "scroll"))
      .on("slideFocus", () => tweenScale(emblaApi));
  }, [emblaApi, tweenScale]);

  return (
    <div className="hidden md:block md:max-w-6xl mx-auto">
      <div
        ref={emblaRef}
        className={`overflow-hidden transition-opacity duration-200 ${
          emblaApi ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-4">
          {React.Children.map(children, (child, idx) => (
            <div key={idx} className="flex-none w-full md:w-1/2 transform-gpu">
              <div className="slide-scaler transition-transform duration-150 ease-out will-change-transform">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls: dots absolutely centered, arrows on the right */}
      <div className="mt-6 relative">
        {/* Dots – absolutely centered */}
        <div className="absolute mt-2 md:mt-4 left-1/2 top-0 transform -translate-x-1/2 flex space-x-4">
          {scrollSnaps.map((_, i) => {
            const isActive = i === selectedIndex;
            const bgColor = isDarkMode
              ? isActive
                ? "#35BDFD"
                : "#23272b"
              : isActive
              ? "#1D4ED8"
              : "lightGray";

            return (
              <DotButton
                key={i}
                onClick={() => onDotButtonClick(i)}
                className={`
        relative
        w-[10px] h-[10px]
        md:w-[13px] md:h-[13px]
        rounded-full
      `}
                style={{
                  background: bgColor,
                  boxShadow:
                    "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
                }}
              />
            );
          })}
        </div>

        {/* Arrow buttons – normal flow, aligned right */}
        <div className="flex justify-center pt-12 md:justify-end space-x-6">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;