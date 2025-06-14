// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { LazyLoadImage } from "./EmblaCarouselLazyLoadImage";
// import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// import { useDarkMode } from "../../../layouts/DarkMode";

// const EmblaCarousel = ({ slides, options }) => {
//   const isDarkMode = useDarkMode(); // get dark/light
//   const [viewportRef, emblaApi] = useEmblaCarousel(options);
//   const [inView, setInView] = useState([]);

//   const { selectedIndex, scrollSnaps, onDotClick } = useDotButton(emblaApi);

//   const updateInView = useCallback((api) => {
//     setInView((prev) => {
//       const newly = api.slidesInView().filter((i) => !prev.includes(i));
//       return prev.concat(newly);
//     });
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     updateInView(emblaApi);
//     emblaApi.on("slidesInView", updateInView);
//     emblaApi.on("reInit", updateInView);
//   }, [emblaApi, updateInView]);

//   return (
//     <div className="relative max-w-3xl mx-auto">
//       {/* Carousel viewport */}
//       <div
//         ref={viewportRef}
//         className="overflow-hidden h-[12rem] sm:h-[16rem] md:h-[23rem] lg:h-[28rem] xl:h-[23rem]"
//       >
//         <div className="flex -ml-4">
//           {slides.map((src, idx) => (
//             <LazyLoadImage
//               key={idx}
//               index={idx}
//               imgSrc={src}
//               inView={inView.includes(idx)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Arrows overlay */}
//       <div className="absolute left-0 right-0 top-[36%] sm:top-[38%] lg:top-[40%] flex items-center justify-between px-0 pointer-events-none">
//         <div className="pointer-events-auto">
//           <PrevButton emblaApi={emblaApi} />
//         </div>
//         <div className="pointer-events-auto">
//           <NextButton emblaApi={emblaApi} />
//         </div>
//       </div>

//       {/* Dots centered below */}
//       <div className="mt-4 flex justify-center gap-6">
//         {scrollSnaps.map((_, idx) => (
//           <DotButton
//             key={idx}
//             onClick={() => onDotClick(idx)}
//             isSelected={idx === selectedIndex}
//             isDarkMode={isDarkMode}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;


// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { LazyLoadImage } from "./EmblaCarouselLazyLoadImage";
// import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// import { useDarkMode } from "../../../layouts/DarkMode";
// import { BiExpand } from "react-icons/bi";

// const EmblaCarousel = ({ slides, options, onExpand, expanded = false }) => {
//   const isDarkMode = useDarkMode();
//   const [viewportRef, emblaApi] = useEmblaCarousel(options);
//   const [inView, setInView] = useState([]);

//   const { selectedIndex, scrollSnaps, onDotClick } = useDotButton(emblaApi);

//   const updateInView = useCallback((api) => {
//     setInView((prev) => {
//       const newly = api.slidesInView().filter((i) => !prev.includes(i));
//       return prev.concat(newly);
//     });
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;
//     updateInView(emblaApi);
//     emblaApi.on("slidesInView", updateInView);
//     emblaApi.on("reInit", updateInView);
//   }, [emblaApi, updateInView]);

//   // rem‐based heights when expanded, else original:
//   const heightClass = expanded
//     ? "h-[15rem] md:h-[30rem] lg:h-[35rem]"
//     : "h-[12rem] sm:h-[16rem] md:h-[23rem] lg:h-[28rem] xl:h-[23rem]";
  
//   const arrowsClass = expanded
//     ? "top-[42%] lg:top-[46%]"
//     : "top-[36%] sm:top-[38%] lg:top-[40%]";

//   // Only apply negative margin on normal mode
//   const trackClass = expanded ? "flex" : "flex -ml-4";

//   const dotsClass = expanded
//     ? "-bottom-[-0.5rem] sm:-bottom-1 sml:-bottom-3 md:-bottom-[-1rem] lg:-bottom-[-3rem]"
//     : "-bottom-10";

//   return (
//     <div className="relative max-w-3xl mx-auto">
//       {/* Carousel viewport */}
//       <div ref={viewportRef} className={`overflow-hidden ${heightClass}`}>
//         <div className={trackClass}>
//           {slides.map((src, idx) => (
//             <div
//               key={idx}
//               className={`relative w-full min-w-0 flex-[0_0_100%] group`}
//             >
//               <LazyLoadImage
//                 index={idx}
//                 imgSrc={src}
//                 inView={inView.includes(idx)}
//                 expanded={expanded}
//                 heightClass={heightClass}
//               />
//               {onExpand && !expanded && (
//                 <BiExpand
//                   className="w-5 h-5 absolute bottom-5 right-5 text-rose-400 dark:text-rose-600 group-hover:text-rose-600 dark:group-hover:text-rose-400 duration-300 cursor-pointer"
//                   onClick={() => onExpand(idx)}
//                   aria-label="Expand"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Arrows */}
//       <div
//         className={`absolute left-0 right-0 ${arrowsClass} flex items-center justify-between px-0 pointer-events-none`}
//       >
//         <div className="pointer-events-auto">
//           <PrevButton emblaApi={emblaApi} />
//         </div>
//         <div className="pointer-events-auto">
//           <NextButton emblaApi={emblaApi} />
//         </div>
//       </div>

//       {/* Dots overlay at bottom center */}
//       <div className={`absolute ${dotsClass} left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-auto`}>
//         {scrollSnaps.map((_, idx) => (
//           <DotButton
//             key={idx}
//             onClick={() => onDotClick(idx)}
//             isSelected={idx === selectedIndex}
//             isDarkMode={isDarkMode}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;



import React, { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "./EmblaCarouselLazyLoadImage";
import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useDarkMode } from "../../../layouts/DarkMode";
import { BiExpand } from "react-icons/bi";

const EmblaCarousel = React.memo(function EmblaCarousel({
  slides,
  options,
  onExpand,
  expanded = false,
}) {
  const isDarkMode = useDarkMode();

  // Embla setup
  const [viewportRef, emblaApi] = useEmblaCarousel(options);
  const [inView, setInView] = useState(() => []);

  const { selectedIndex, scrollSnaps, onDotClick } = useDotButton(emblaApi);

  // updateInView is stable across renders
  const updateInView = useCallback(
    (api) => {
      setInView((prev) => {
        const newly = api.slidesInView().filter((i) => !prev.includes(i));
        return prev.concat(newly);
      });
    },
    [] // no deps
  );

  useEffect(() => {
    if (!emblaApi) return;
    updateInView(emblaApi);
    emblaApi.on("slidesInView", updateInView);
    emblaApi.on("reInit", updateInView);
    return () => {
      emblaApi.off("slidesInView", updateInView);
      emblaApi.off("reInit", updateInView);
    };
  }, [emblaApi, updateInView]);

  // Height classes based on expanded
  const heightClass = useMemo(
    () =>
      expanded
        ? "h-[15rem] md:h-[30rem] lg:h-[35rem]"
        : "h-[12rem] sm:h-[16rem] md:h-[23rem] lg:h-[28rem] xl:h-[23rem]",
    [expanded]
  );

  // Position of arrows
  const arrowsClass = useMemo(
    () =>
      expanded
        ? "top-[42%] lg:top-[46%]"
        : "top-[36%] sm:top-[38%] lg:top-[40%]",
    [expanded]
  );

  // track class
  const trackClass = useMemo(
    () => (expanded ? "flex" : "flex -ml-4"),
    [expanded]
  );

  // dots position
  const dotsClass = useMemo(
    () =>
      expanded
        ? "-bottom-[-0.5rem] sm:-bottom-1 sml:-bottom-3 md:-bottom-[-1rem] lg:-bottom-[-3rem]"
        : "-bottom-10",
    [expanded]
  );

  // onExpand callback is already stable
  const handleExpandClick = useCallback(
    (idx) => {
      if (onExpand) onExpand(idx);
    },
    [onExpand]
  );

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Carousel viewport */}
      <div ref={viewportRef} className={`overflow-hidden ${heightClass}`}>
        <div className={trackClass}>
          {slides.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full min-w-0 flex-[0_0_100%] group"
            >
              <LazyLoadImage
                index={idx}
                imgSrc={src}
                inView={inView.includes(idx)}
                expanded={expanded}
                heightClass={heightClass}
              />
              {onExpand && !expanded && (
                <div className="absolute bottom-5 right-5 p-2 bg-white/80 dark:bg-black/60 rounded-full ">
                  <BiExpand
                    className="w-5 h-5  text-rose-600 dark:text-rose-300 hover:text-rose-800 dark:hover:text-rose-600 transition-colors duration-300 cursor-pointer"
                    onClick={() => handleExpandClick(idx)}
                    aria-label="Expand"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div
        className={`absolute left-0 right-0 ${arrowsClass} flex items-center justify-between px-0 pointer-events-none`}
      >
        <div className="pointer-events-auto">
          <PrevButton emblaApi={emblaApi} />
        </div>
        <div className="pointer-events-auto">
          <NextButton emblaApi={emblaApi} />
        </div>
      </div>

      {/* Dots overlay at bottom center */}
      <div
        className={`absolute ${dotsClass} left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-auto`}
      >
        {scrollSnaps.map((_, idx) => (
          <DotButton
            key={idx}
            onClick={() => onDotClick(idx)}
            isSelected={idx === selectedIndex}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
});

export default EmblaCarousel;
