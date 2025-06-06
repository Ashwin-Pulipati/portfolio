// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";

// const EmblaCarousel = React.forwardRef(
//   ({ slides = [], options = {}, ...props }, ref) => {
//     const [emblaRef, emblaApi] = useEmblaCarousel(options, ref);
//     const {
//       prevBtnDisabled,
//       nextBtnDisabled,
//       onPrevButtonClick,
//       onNextButtonClick,
//     } = usePrevNextButtons(emblaApi);
//     const { selectedIndex, scrollSnaps, onDotButtonClick } =
//       useDotButton(emblaApi);

//     return (
//       <section {...props} className="max-w-3xl mx-auto">
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex space-x-4 -ml-4">
//             {slides.map((index) => (
//               <div key={index} className="flex-none w-full pl-4">
//                 <div className="h-72 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4 flex justify-between items-center px-4 md:px-0">
//           <div className="flex space-x-2">
//             <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//             <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//           </div>
//             {scrollSnaps.map((_, idx) => (
//               <DotButton
//                 key={idx}
//                 active={idx === selectedIndex}
//                 onClick={() => onDotButtonClick(idx)}
//               />
//             ))}
//         </div>
//       </section>
//     );
//   }
// );

// export default React.memo(EmblaCarousel);



// EmblaCarousel.jsx

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";

const EmblaCarousel = React.forwardRef(
  ({ slides = [], options = {}, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, ref);
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi);

    // Memoize slide elements
    const slideElements = useMemo(
      () =>
        slides.map((index) => (
          <div key={index} className="flex-none w-full pl-4">
            <div className="h-72 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </div>
          </div>
        )),
      [slides]
    );

    // Memoize dot buttons
    const dotButtons = useMemo(
      () =>
        scrollSnaps.map((_, idx) => (
          <DotButton
            key={idx}
            active={idx === selectedIndex}
            onClick={() => onDotButtonClick(idx)}
          />
        )),
      [scrollSnaps, selectedIndex, onDotButtonClick]
    );

    return (
      <section {...props} className="max-w-3xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-4 -ml-4">{slideElements}</div>
        </div>

        <div className="mt-4 flex justify-between items-center px-4 md:px-0">
          <div className="flex space-x-2">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
          {dotButtons}
        </div>
      </section>
    );
  }
);

export default React.memo(EmblaCarousel);
