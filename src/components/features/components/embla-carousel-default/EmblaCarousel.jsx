import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";

const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="max-w-3xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4 -ml-4">
          {slides.map((index) => (
            <div key={index} className="flex-none w-full pl-4">
              <div className="h-72 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center px-4 md:px-0">
        <div className="flex space-x-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="flex space-x-2">
          {scrollSnaps.map((_, idx) => (
            <DotButton
              key={idx}
              active={idx === selectedIndex}
              onClick={() => onDotButtonClick(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(EmblaCarousel);
